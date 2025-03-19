const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const Joi = require("joi");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// تهيئة multer لتخزين الصور
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload.name || !payload.email) {
      return res
        .status(400)
        .json({ message: "Missing required data from Google" });
    }

    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = new User({
        name: payload.name,
        email: payload.email,
        googleId: payload.sub,
        profilePicture: payload.picture,
        role: "reader",
      });
      await user.save();
    }

    const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("authToken", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(200).json({ message: "Google login successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Google login failed", error: error.message });
  }
};

exports.registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "لم يتم العثور على المستخدم" });
    }

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
        savedArticles: user.savedArticles,
        comments: user.comments,
        readingHistory: user.readingHistory,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// مخطط التحقق باستخدام Joi
const profileUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional().messages({
    "string.base": "الاسم يجب أن يكون نصًا",
    "string.min": "الاسم يجب أن يكون على الأقل 3 أحرف",
    "string.max": "الاسم يجب أن لا يتجاوز 50 حرفًا",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .optional()
    .messages({
      "string.base": "البريد الإلكتروني يجب أن يكون نصًا",
      "string.email": "صيغة البريد الإلكتروني غير صحيحة",
    }),
  file: Joi.any().optional(), // للتحقق من الصورة إذا كانت موجودة
});

exports.updateUserProfile = async (req, res) => {
  const { name, email } = req.body;
  const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

  // التحقق من البيانات باستخدام Joi
  const { error } = profileUpdateSchema.validate(
    { name, email, file: req.file },
    { abortEarly: false }
  );

  if (error) {
    return res.status(400).json({
      message: "خطأ في التحقق",
      errors: error.details.map((err) => err.message),
    });
  }

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // تحديث بيانات المستخدم
    user.name = name || user.name;
    user.email = email || user.email;
    if (profilePicture) {
      user.profilePicture = profilePicture;
    }

    await user.save();

    res.status(200).json({
      message: "تم تحديث بيانات المستخدم بنجاح",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        savedArticles: user.savedArticles,
        comments: user.comments,
        readingHistory: user.readingHistory,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logoutUser = (req, res) => {
  res.clearCookie("authToken").status(200).json({ message: "تم تسجيل الخروج" });
};

exports.getUserFromToken = async (req, res) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ userId: decoded.id });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
