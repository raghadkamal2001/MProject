const User = require("../models/User");
const article = require("../models/Article");

// Controller to get saved articles for the logged-in user
exports.getSavedArticles = async (req, res) => {
  try {
    // Get user ID from the token (from the middleware)
    const userId = req.user.id;

    // Find the user and populate the saved articles
    const user = await User.findById(userId).populate("savedArticles");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Return the user's saved articles
    res.status(200).json({ savedArticles: user.savedArticles });
  } catch (error) {
    console.error("Error fetching saved articles:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while fetching saved articles." });
  }
};
