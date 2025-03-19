// routes/userRoutes.js
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
const {
  registerUser,
  loginUser,
  googleLogin,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  getUserFromToken,
} = require("../controllers/userController");

const {
  updateUserProfileWithProof,
  uploadProfileProof,
} = require("../controllers/RegisterPublisherController");

const verifyToken = require("../Middlewares/authMiddleware");

router.put(
  "/profileProf",
  verifyToken,
  uploadProfileProof,
  updateUserProfileWithProof
);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);
router.get("/profile", verifyToken, getUserProfile);
router.put(
  "/profile",
  verifyToken,
  upload.single("profilePicture"),
  updateUserProfile
);
router.post("/logout", logoutUser);
router.get("/get-user", getUserFromToken);
module.exports = router;
