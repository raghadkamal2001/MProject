import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArticleDetailPage() {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [email, setEmail] = useState("");
  const [likeCount, setLikeCount] = useState(42);
  const [liked, setLiked] = useState(false);

  const [shareCount, setShareCount] = useState(14);
  const [commentsCount, setCommentsCount] = useState(8);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
        setArticle(response.data); 
        setLoading(false); 
        
        // Mock comments data
        setComments([
          { id: 1, author: "سارة أحمد", content: "مقال رائع، شكراً على المعلومات القيمة!", date: "منذ 3 ساعات" },
          { id: 2, author: "خالد محمود", content: "أتفق مع الكاتب في العديد من النقاط المذكورة. أتمنى المزيد من المقالات المشابهة.", date: "منذ 5 ساعات" },
          { id: 3, author: "ليلى عبدالله", content: "هل هناك مصادر إضافية يمكن الرجوع إليها للاستزادة؟", date: "منذ يوم واحد" }
        ]);
        setCommentsCount(8);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false); 
      }
    };

    fetchArticle();
  }, [id]); 

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      author: "أنت",
      content: comment,
      date: "الآن"
    };
    
    setComments([newComment, ...comments]);
    setComment("");
    setCommentsCount(commentsCount + 1);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
    // Here you would typically implement the sharing functionality
    alert("تم نسخ رابط المقال!");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically implement the subscription functionality
    alert(`تم الاشتراك بنجاح باستخدام البريد الإلكتروني: ${email}`);
    setEmail("");
  };

  if (loading) {
    return <div className="text-center p-10 text-xl">جارٍ تحميل المقال...</div>;
  }

  if (!article) {
    return <div className="text-center p-10 text-red-500 text-xl">المقال غير موجود</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl" dir="rtl">
      {/* Category bar */}
      <div className="mb-4 text-sm text-gray-500 flex gap-2">
        <span>مقالات</span>
        <span>|</span>
        <span>{article.category || "غير محدد"}</span>
      </div>

      {/* Article Title */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          {article.title}
        </h1>
      </div>

      {/* Author and Date Information */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-gray-500">
          <span className="flex items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {article.author || "كاتب مجهول"}
          </span>
          <span className="mx-2">|</span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(article.publishedDate).toLocaleDateString() || "غير معروف"}
          </span>
        </div>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src={`http://localhost:5000/${article.featuredImage}`}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Engagement Stats Bar */}
      <div className="flex items-center justify-between mb-8 py-3 px-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-8 ">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-gray-600">{article.views} مشاهدة</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-gray-600">{commentsCount} تعليق</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-gray-600">{shareCount} مشاركة</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 ">
          <button 
            onClick={handleLike} 
            className={`flex items-center ${liked ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill={liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{likeCount}</span>
          </button>
          
          <button 
            onClick={handleShare} 
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>مشاركة</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="text-gray-700 leading-relaxed space-y-6 mb-8">
        <p className="text-lg">{article.paragraph1}</p>
        <p className="text-lg">{article.paragraph2}</p>

        {/* Third paragraph and title */}
        {article.paragraph3Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {article.paragraph3Title}
            </h2>
            <p className="text-lg">{article.paragraph3}</p>
          </div>
        )}

        {/* Fourth paragraph and title */}
        {article.paragraph4Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {article.paragraph4Title}
            </h2>
            <p className="text-lg">{article.paragraph4}</p>
          </div>
        )}
      </div>

      {/* Writer's Card */}
      <div className="bg-white  p-6 mb-8 flex flex-col md:flex-row items-start md:items-center border-b border-[#51a31d] ">
        <div className="mb-4 md:mb-0 md:ml-6 grayscale filter">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695569.jpg?uid=R181373975&ga=GA1.1.1709772547.1733645509&semt=ais_hybrid"
            alt={article.author || "الكاتب"}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-800 mb-1">{article.author} </h3>
          <p className="text-sm text-gray-500 mb-2">   {article.authorDescription} </p>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-[#51a31d]"></div>
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-right">اشترك في النشرة البريديةالاسبوعية : <span>{article.category || "غير محدد"}</span></h3>
            <p className="text-gray-600 text-sm text-right"> اشترك الآن في يقين نيوز وكن على اطلاع دائم بأهم الأخبار والمستجدات من المنطقة والعالم.</p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              className="flex-1 border-2 border-gray-300 rounded-full px-4 py-2 text-right bg-white"
              required
            />
            <button 
              type="submit" 
              className="bg-black text-white font-semibold px-6 py-2 rounded-full  hover:bg-gray-800 transition-colors"
            >
              اشترك الآن
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-3 text-right">
            عند قيامكم بالتسجيل فهذا يعني موافقتكم على <a href="#" className="text-[#51a31d] hover:underline">سياسة الخصوصية للشبكة</a>
          </p>
          
          <div className="mt-2 text-xs text-gray-500 text-right">
            محمي بواسطة reCAPTCHA
          </div>
        </div>
      </div>

      {/* Comment Form Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">أضف تعليقًا</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="اكتب تعليقك هنا..."
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            نشر التعليق
          </button>
        </form>
      </div>

      {/* Comments Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span>التعليقات </span>
          <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2">
            {comments.length}
          </span>
        </h3>
        
        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-100 pb-6">
                <div className="flex items-start mb-2">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center ml-3">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{comment.author}</h4>
                    <p className="text-gray-500 text-sm">{comment.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mr-13">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-6">لا توجد تعليقات حتى الآن. كن أول من يعلق!</p>
        )}
      </div>
    </div>
  );
}