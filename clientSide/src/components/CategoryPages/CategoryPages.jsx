import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles/all");
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    activeCategory === "الكل"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  if (loading) {
    return <div className="text-center p-10 text-xl">جارٍ تحميل المقالات...</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-100 flex items-center text-white">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/6271585/6271585-sd_960_506_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(40, 36, 41, 0.7)" }}></div>
        <div className="relative z-10 max-w-4xl ml-auto px-10 lg:px-20 text-right" style={{ marginTop: "150px" }}>
          <h1 className="text-lg md:text-xl font-bold">
            اقرأ أهم وأبرز الأخبار والتقارير العربية والعالمية في الشأن السياسي والزراعي والصحي والمزيد حصرياً عبر موقعنا الإلكتروني{" "}
            <span className="text-[#51a31d]">خبرني.</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-1 bg-[#51a31d]"></div>

      {/* Category bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8">
            <h1 className="text-3xl font-bold text-[#383838]">مقالات</h1>
            <div className="flex space-x-reverse gap-x-6 justify-center flex-1">
              {["الكل", "سياسي", "صحي", "زراعي"].map((category) => (
                <button
                  key={category}
                  className={`py-2 text-lg font-bold ${
                    activeCategory === category ? "text-[#51a31d]" : "text-[#383838]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input type="text" placeholder="ابحث هنا..." className="rounded-md border border-gray-200 p-3 pr-3 w-56 text-sm focus:outline-none" />
              <button className="absolute left-0 top-0 bg-[#383838] text-white h-full w-10 flex items-center justify-center rounded-l-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* List of articles */}
      <div className="container mx-auto px-4 py-8 mt-4">
        {loading ? (
          <p className="text-center text-lg text-gray-600">جارٍ تحميل المقالات...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link to={`/article/${article._id}`} key={article._id} className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
                  <div className="overflow-hidden rounded-lg mb-3 relative">
                    <img src={`http://localhost:5000/${article.featuredImage}`} alt={article.title} className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <h2 className="text-lg font-bold text-[#383838] mb-1">{article.title}</h2>
                  <div className="text-xs text-gray-500 mb-2">
                    بواسطة {article.author} - {new Date(article.publishedDate).toLocaleDateString()}
                  </div>
                  <p className="text-sm">{article.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                     {article.tags &&
                    (typeof article.tags === "string" 
                   ? article.tags.split(" ").map((tag, index) => (
                 <span key={index} className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-[rgba(117,133,255,0.2)]">
                 #{tag.replace("#", "")} 
                 </span>
                   ))
                    : article.tags.map((tag, index) => (
                <span key={index} className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-[rgba(117,133,255,0.2)]">
                    #{tag}
              </span>
                  )))} 
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-lg text-gray-600">لا توجد مقالات متاحة في هذا التصنيف.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;