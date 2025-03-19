// import React, { useState } from "react";
// import { 
//   Search, 
//   Clock, 
//   TrendingUp, 
//   Bookmark, 
//   ChevronRight,
//   Globe,
//   AlertCircle,
//   FilmIcon,
//   DollarSign,
//   Users,
//   Zap,
//   Menu
// } from "lucide-react";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const categories = [
//     { name: "World", icon: <Globe size={16} />, color: "#7585ff" },
//     { name: "Politics", icon: <Users size={16} />, color: "#ff5757" },
//     { name: "Business", icon: <DollarSign size={16} />, color: "#47c279" },
//     { name: "Technology", icon: <Zap size={16} />, color: "#ffa836" },
//     { name: "Entertainment", icon: <FilmIcon size={16} />, color: "#c044ff" },
//     { name: "Breaking", icon: <AlertCircle size={16} />, color: "#ff3a3a" }
//   ];
  
//   const breakingNews = [
//     "Supreme Court rules on landmark climate change case",
//     "Major tech company announces revolutionary AI breakthrough",
//     "Global economic summit concludes with new trade agreements"
//   ];
  
//   // Trending topics
//   const trendingTopics = ["Climate Change", "Election 2025", "Tech Stocks", "Healthcare Reform"];
  
//   return (
//     <div className="bg-[#f9f9fb] text-[#383838]">
//       {/* Top Breaking News Ticker */}
//       <div className="bg-[#383838] text-white py-2 px-4 overflow-hidden">
//         <div className="flex items-center max-w-6xl mx-auto">
//           <div className="flex items-center bg-red-600 px-3 py-1 rounded-full mr-4">
//             <AlertCircle size={14} className="mr-1" />
//             <span className="text-sm font-bold">BREAKING</span>
//           </div>
//           <div className="overflow-hidden relative w-full">
//             <div className="animate-marquee whitespace-nowrap">
//               {breakingNews.map((news, index) => (
//                 <span key={index} className="mx-4 text-sm inline-block">
//                   {news}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Navigation Bar */}
//       <header className="bg-white shadow-sm sticky top-0 z-20">
//         <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold mr-8">
//               <span className="text-[#7585ff]">Next</span>News
//             </h1>
//             <nav className="hidden md:flex space-x-6">
//               {categories.map((category, index) => (
//                 <a 
//                   key={index} 
//                   href="#" 
//                   className="flex items-center text-sm font-medium hover:text-[#7585ff] transition-colors"
//                   style={{ color: index === 0 ? category.color : 'inherit' }}
//                 >
//                   {category.icon}
//                   <span className="ml-1">{category.name}</span>
//                 </a>
//               ))}
//             </nav>
//             <button className="md:hidden">
//               <Menu size={24} />
//             </button>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search news..."
//                 className="bg-gray-100 py-2 pl-9 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7585ff] w-40 md:w-64"
//               />
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>
//             <button className="bg-[#7585ff] text-white py-2 px-4 rounded-full text-sm font-medium hidden md:block hover:bg-[#7585ff]/90 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </header>
      
//       {/* Main Hero Content */}
//       <div className="max-w-6xl mx-auto pt-8 pb-12 px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Featured Article */}
//           <div className="lg:col-span-2">
//             <div className="relative rounded-xl overflow-hidden shadow-lg h-96 group">
//               <img 
//                 src="https://source.unsplash.com/1200x800/?news,politics" 
//                 alt="Featured News" 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <div className="flex items-center mb-3">
//                   <span className="bg-[#7585ff] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">POLITICS</span>
//                   <span className="flex items-center text-xs text-white/80">
//                     <Clock size={12} className="mr-1" />
//                     2 hours ago
//                   </span>
//                 </div>
//                 <h2 className="text-3xl font-bold mb-3 leading-tight">
//                   New legislation aims to address climate change with unprecedented investment
//                 </h2>
//                 <p className="text-white/90 mb-4 text-sm md:text-base line-clamp-2">
//                   Lawmakers unveiled a comprehensive plan today that would allocate billions toward renewable energy infrastructure and emissions reduction efforts.
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <img 
//                       src="https://source.unsplash.com/100x100/?portrait" 
//                       alt="Author" 
//                       className="w-8 h-8 rounded-full mr-2 object-cover"
//                     />
//                     <span className="text-sm">James Wilson</span>
//                   </div>
//                   <button className="flex items-center text-sm font-medium text-white hover:text-[#7585ff] transition-colors">
//                     Read More <ChevronRight size={16} className="ml-1" />
//                   </button>
//                 </div>
//               </div>
//               <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#383838] p-2 rounded-full transition-all">
//                 <Bookmark size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* Trending & Quick Links */}
//           <div className="flex flex-col space-y-8">
//             {/* Trending Topics */}
//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <div className="flex items-center mb-4">
//                 <TrendingUp size={20} className="text-[#7585ff] mr-2" />
//                 <h3 className="text-xl font-bold">Trending Now</h3>
//               </div>
//               <div className="space-y-4">
//                 {trendingTopics.map((topic, index) => (
//                   <div key={index} className="flex items-center">
//                     <span className="bg-[#f9f9fb] text-[#7585ff] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
//                       {index + 1}
//                     </span>
//                     <span className="font-medium hover:text-[#7585ff] cursor-pointer transition-colors">
//                       {topic}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="bg-[#7585ff]/10 rounded-xl p-6">
//               <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Get the latest news delivered directly to your inbox.
//               </p>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg mb-3 border border-gray-300 focus:outline-none focus:border-[#7585ff]"
//               />
//               <button className="bg-[#7585ff] text-white w-full py-3 rounded-lg font-medium transition-all hover:bg-[#7585ff]/90">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Category Pills */}
//         <div className="mt-10 flex flex-wrap gap-2">
//           {["Politics", "Economy", "Technology", "Science", "Health", "Sports", "Entertainment", "World"].map((category, index) => (
//             <a 
//               key={index} 
//               href="#" 
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 index === 0 ? 'bg-[#7585ff] text-white' : 'bg-white text-[#383838] hover:bg-gray-100'
//               }`}
//             >
//               {category}
//             </a>
//           ))}
//           <a href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#383838] hover:bg-gray-100 flex items-center">
//             More <ChevronRight size={14} className="ml-1" />
//           </a>
//         </div>
//       </div>
      
//       {/* CSS for the marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;


// import React, { useState } from "react";
// import { 
//   Search, 
//   Clock, 
//   TrendingUp, 
//   Bookmark, 
//   ChevronRight,
//   AlertCircle
// } from "lucide-react";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const breakingNews = [
//     "قرب الوصول الى اتفاق وقف اطلاق النار بين غزة واسرائيل",
//     "اوكرنيا بدأت بالخضوع لروسيا",
//     "ظهور انواع جديدة من النباتات في جزر القرم",
//     "  الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
   
//   ];
  
//   // Trending topics
//   const trendingTopics = ["سياسي", "صحي", "زراعي"];
  
//   return (
//     <div className="bg-[#f9f9fb] text-[#383838]">
//       {/* Top Breaking News Ticker */}
//       <div className="bg-[#383838] text-white py-2 px-4 overflow-hidden">
//         <div className="flex items-center max-w-6xl mx-auto">
//           <div className="flex items-center bg-[#51a31d] px-3 py-1 rounded-full mr-4">
//             <AlertCircle size={14} className="mr-1" />
//             <span className="text-sm font-bold">BREAKING</span>
//           </div>
//           <div className="overflow-hidden relative w-full">
//             <div className="animate-marquee whitespace-nowrap">
//               {breakingNews.map((news, index) => (
//                 <span key={index} className="mx-4 text-sm inline-block">
//                   {news}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Main Hero Content */}
//       <div className="max-w-6xl mx-auto pt-8 pb-12 px-4">
//         {/* Header with Logo and Search */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">
//             <span className="text-[#7585ff]">ال</span>يقين
//           </h1>
          
//           <div className="flex items-center space-x-4">
//             {/* <div className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search news..."
//                 className="bg-white py-2 pl-9 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7585ff] w-40 md:w-64 border border-gray-200"
//               />
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div> */}
//             <button className="bg-[#7585ff] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#7585ff]/90 transition-colors">
//              اشترك الان
//             </button>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Featured Article */}
//           <div className="lg:col-span-2">
//             <div className="relative rounded-xl overflow-hidden shadow-lg h-96 group">
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
//                 alt="Featured News" 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <div className="flex items-center mb-3">
//                   <span className="bg-[#7585ff] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">سياسة</span>
//                   <span className="flex items-center text-xs text-white/80">
//                     <Clock size={12} className="mr-1" />
//                     قبل ساعتين
//                   </span>
//                 </div>
//                 <h2 className="text-3xl font-bold mb-3 leading-tight">
//                   حماس تقف بوجه اقوى دول العالم وتتحكم بها
//                 </h2>
//                 <p className="text-white/90 mb-4 text-sm md:text-base line-clamp-2">
//                  غزة بعد الاتفاق.. حماس وإسرائيل تردان على مقترح الوسطاء والاحتلال يصعد بالضفة

//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <img 
//                       src="https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
//                       alt="Author" 
//                       className="w-8 h-8 rounded-full mr-2 object-cover"
//                     />
//                     <span className="text-sm">صالح الجعفراوي</span>
//                   </div>
//                   <button className="flex items-center text-sm font-medium text-white hover:text-[#7585ff] transition-colors">
//                    المزيد <ChevronRight size={16} className="ml-1" />
//                   </button>
//                 </div>
//               </div>
//               <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#383838] p-2 rounded-full transition-all">
//                 <Bookmark size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* Trending & Quick Links */}
//           <div className="flex flex-col space-y-8">
//             {/* Trending Topics */}
//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <div className="flex items-center mb-4">
//                 <TrendingUp size={20} className="text-[#7585ff] mr-2" />
//                 <h3 className="text-xl font-bold">الأقسام</h3>
//               </div>
//               <div className="space-y-4">
//                 {trendingTopics.map((topic, index) => (
//                   <div key={index} className="flex items-center">
//                     <span className="bg-[#f9f9fb] text-[#7585ff] font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
//                       {index + 1}
//                     </span>
//                     <span className="font-medium hover:text-[#7585ff] cursor-pointer transition-colors">
//                       {topic}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="bg-[#7585ff]/10 rounded-xl p-6">
//               <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Get the latest news delivered directly to your inbox.
//               </p>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg mb-3 border border-gray-300 focus:outline-none focus:border-[#7585ff]"
//               />
//               <button className="bg-[#7585ff] text-white w-full py-3 rounded-lg font-medium transition-all hover:bg-[#7585ff]/90">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Category Pills */}
//         {/* <div className="mt-10 flex flex-wrap gap-2">
//           {["Politics", "Economy", "Technology", "Science", "Health", "Sports", "Entertainment", "World"].map((category, index) => (
//             <a 
//               key={index} 
//               href="#" 
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 index === 0 ? 'bg-[#7585ff] text-white' : 'bg-white text-[#383838] hover:bg-gray-100'
//               }`}
//             >
//               {category}
//             </a>
//           ))}
//           <a href="#" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#383838] hover:bg-gray-100 flex items-center">
//             More <ChevronRight size={14} className="ml-1" />
//           </a>
//         </div> */}
//       </div>
      
//       {/* CSS for the marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 40s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;



import React, { useState } from "react";
import { 
  Search, 
  Clock, 
  TrendingUp, 
  Bookmark, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      id: 1,
      category: 'سياسة',
      date: 'Oct 7, 2023',
      title: 'حماس تقف بوجه اقوى دول العالم وتتحكم بها',
      description: 'قال الضيف، في رسالة صوتية مسجلة فجر يوم السبت الموافق السابع من أكتوبر/تشرين الأول 2023 "نعلن بدء عملية طوفان الأقصى بضربة أولى استهدفت مواقع ومطارات وتحصينات عسكرية للعدو. وأضاف أن هذه الضربة الأولى تجاوزت 5 آلاف صاروخ وقذيفة خلال أول 20 دقيقة من العملية.',
      image: 'https://images.pexels.com/photos/20105308/pexels-photo-20105308/free-photo-of-close-up-of-banners-held-by-people-at-a-protest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      largeCard: true
    },
    {
      id: 2,
      category: 'صحة',
      date: 'Oct 28, 2025',
      title: 'توصيات لقاح الإنفلونزا لموسم 2025-2026',
      description:'اختبار لقاح الإنفلونزا المرشح المعتمد على mRNA. في يوليو 2022، أعلنت شركة فايزر عن نتائج سريرية إيجابية في تجربتها للمرحلة الثانية للقاح الإنفلونزا mRNA المرشح.',
      image: 'https://images.pexels.com/photos/8413152/pexels-photo-8413152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 3,
      category: 'صحة',
      date: 'Oct 25, 2025',
      title: 'تحديثات لقاحات كوفيد-19',
      description:'ونبدأ بجواب السؤال "ما أفضل لقاح لفيروس كورونا المستجد؟"',
      image: 'https://images.pexels.com/photos/5994837/pexels-photo-5994837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 4,
      category: 'زراعة',
      date: 'Oct 21, 2016',
      description:'',
      title: 'إقرار استراتيجية المراعي 2024-2030',
      image: 'https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  
  const breakingNews = [
    "قرب الوصول الى اتفاق وقف اطلاق النار بين غزة واسرائيل",
    "اوكرنيا بدأت بالخضوع لروسيا",
    "ظهور انواع جديدة من النباتات في جزر القرم",
    "  الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
    "الأردنيون يقفون يدًا واحدة ضد العدوان ويدعمون الحق الفلسطيني",
   
  ];
  
  // Trending topics
  const trendingTopics = ["سياسي", "صحي", "زراعي"];
  return (
    <div className="bg-[#f9f9fb] text-[#383838]">
      {/* ✅ شريط الأخبار العاجلة */}
      <div className="bg-[#383838] text-white py-2 px-4 overflow-hidden">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex items-center bg-[#51a31d] px-3 py-1 rounded-full mr-4">
            <AlertCircle size={14} className="mr-1" />
            <span className="text-sm font-bold">BREAKING</span>
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="whitespace-nowrap animate-marquee">
              {breakingNews.map((news, index) => (
                <span key={index} className="mx-4 text-sm inline-block">{news}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ شريط التنقل */}
      <nav className="py-6">
        <ul className="flex justify-center space-x-8 font-medium">
          {["كل الأقسام", "السياسة", "الصحة", "الزراعة"].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-gray-500 flex items-center">
                {item} {["Categories", "Features"].includes(item) && <span className="ml-1">▼</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ المقالات الرئيسية */}
      <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
    {articles.map((article, index) => (
      <div 
        key={article.id} 
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 
          ${article.largeCard ? "md:col-span-1 lg:col-span-2 row-span-2 h-110" : ""} 
          ${index === 1 ? "lg:col-span-1 h-110" : ""}   
          ${index === 2 ? "lg:col-span-2 h-70" : ""}   
        `}
      >
        {/* ✅ الصورة الخلفية مع تأثير التحويم */}
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" 
             style={{ backgroundImage: `url(${article.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* ✅ محتوى النص */}
        <div className="absolute bottom-0 p-4 text-white">
          <span className={`inline-block px-3 py-1 mb-2 text-xs font-semibold rounded ${article.largeCard ? "bg-yellow-500" : "bg-blue-500"}`}>
            {article.category}
          </span>
          <p className="text-sm mb-2 opacity-80">{article.date}</p>
          <h3 className={`text-2xl font-bold mb-2`}>{article.title}</h3>

          {/* ✅ الوصف يظهر فقط عند التحويم */}
          <p className="text-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {article.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


    
      
      {/* ✅ كود تحريك الأخبار العاجلة */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;