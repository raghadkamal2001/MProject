const User = require("./models/User");
const Article = require("./models/Article");

User.aggregate([
  {
    $lookup: {
      from: "articles", // اسم مجموعة المقالات
      localField: "_id", // الحقل في مجموعة users
      foreignField: "author", // الحقل في مجموعة articles
      as: "articles", // الاسم الذي سيحمل البيانات المدمجة
    },
  },
  {
    $out: "UserArticles", // حفظ النتيجة في مجموعة جديدة
  },
])
  .then(() => {
    console.log("User and Article data merged successfully.");
  })
  .catch((err) => {
    console.error("Error merging data:", err);
  });
