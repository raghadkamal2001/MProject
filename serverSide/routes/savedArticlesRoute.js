const express = require("express");
const { getSavedArticles } = require("../controllers/savedArticlesController");
const verifyToken = require("../Middlewares/authMiddleware");
// Middleware to verify the user

const router = express.Router();

// Protected route to fetch saved articles for the authenticated user
router.get("/saved-articles", verifyToken, getSavedArticles);

module.exports = router;
