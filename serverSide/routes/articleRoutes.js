const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Create a new article
router.post(
  "/submit",
  upload.single("featuredImage"),
  articleController.createArticle
);

// Fetch all articles
router.get("/all", articleController.getAllArticles);

// Get details of one article
router.get("/:id", articleController.getArticleById);

module.exports = router;
