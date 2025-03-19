const Article = require("../models/Article"); // تأكد من أن المسار صحيح

// جلب المقالات الصحية فقط
const getHealtArticles = async (req, res) => {
  try {
    const healthArticles = await Article.find({ category: "صحي" })
      .sort({ publishedDate: -1 }) // ترتيب حسب الأحدث
      .limit(5); // تحديد عدد المقالات المسترجعة

    res.status(200).json({ success: true, data: healthArticles });
  } catch (error) {
    console.error("Error fetching health articles:", error);
    res
      .status(500)
      .json({ success: false, message: "حدث خطأ أثناء جلب المقالات الصحية" });
  }
};
const getPolicyArticles = async (req, res) => {
  try {
    const healthArticles = await Article.find({ category: "سياسي" })
      .sort({ publishedDate: -1 }) // ترتيب حسب الأحدث
      .limit(5); // تحديد عدد المقالات المسترجعة

    res.status(200).json({ success: true, data: healthArticles });
  } catch (error) {
    console.error("Error fetching health articles:", error);
    res
      .status(500)
      .json({ success: false, message: "حدث خطأ أثناء جلب المقالات الصحية" });
  }
};

const getArgArticles = async (req, res) => {
  try {
    const healthArticles = await Article.find({ category: "زراعي" })
      .sort({ publishedDate: -1 }) // ترتيب حسب الأحدث
      .limit(5); // تحديد عدد المقالات المسترجعة

    res.status(200).json({ success: true, data: healthArticles });
  } catch (error) {
    console.error("Error fetching health articles:", error);
    res
      .status(500)
      .json({ success: false, message: "حدث خطأ أثناء جلب المقالات الصحية" });
  }
};

module.exports = { getHealtArticles, getPolicyArticles, getArgArticles };
