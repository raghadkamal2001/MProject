const multer = require("multer");
const Joi = require("joi");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const profileUpdateSchema = Joi.object({
  description: Joi.string().min(10).max(500).required().messages({
    "string.base": "الشرح يجب أن يكون نصًا",
    "string.min": "الشرح يجب أن يكون على الأقل 10 أحرف",
    "string.max": "الشرح يجب أن لا يتجاوز 500 حرف",
    "any.required": "الشرح مطلوب",
  }),
  image: Joi.any().optional().messages({
    "any.required": "الصورة مطلوبة",
  }),
});

exports.updateUserProfileWithProof = async (req, res) => {
  const { description } = req.body;

  const { error } = profileUpdateSchema.validate(
    { description, image: req.file },
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

    user.status = "pending";
    user.explanation = description || user.explanation;
    user.identityProof = req.file ? req.file.path : user.identityProof;

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
        status: user.status,
        explanation: user.explanation,
        identityProof: user.identityProof,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.uploadProfileProof = upload.single("image");
