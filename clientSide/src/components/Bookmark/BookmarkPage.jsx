import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, Filter, Clock, Trash2, Bookmark, ChevronDown, X, User, Calendar, Eye, Star, Heart, Share2, Bell, BookOpen } from 'lucide-react';
import axios from "axios"
const BookmarkPage = () => {
  // State for view toggle (grid/list)
  const [viewMode, setViewMode] = useState('grid');
  
  // State for animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Sample bookmark data
  // const [bookmarks, setBookmarks] = useState([
  //   {
  //     id: 1,
  //     title: "The Top 5 Tech Innovations Changing Our Lives in 2025",
  //     category: "Technology",
  //     date: "Mar 10, 2025",
  //     readingTime: "8 min read",
  //     author: "Alex Morgan",
  //     image: "/api/placeholder/600/400",
  //     unread: true,
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     title: "Global Economy Faces New Challenges as Markets Adjust",
  //     category: "Business",
  //     date: "Mar 8, 2025",
  //     readingTime: "12 min read",
  //     author: "Sarah Chen",
  //     image: "/api/placeholder/600/400",
  //     unread: false
  //   },
  //   {
  //     id: 3,
  //     title: "Climate Scientists Discover Promising New Carbon Capture Method",
  //     category: "Science",
  //     date: "Mar 5, 2025",
  //     readingTime: "10 min read",
  //     author: "James Wilson",
  //     image: "/api/placeholder/600/400",
  //     unread: true
  //   },
  //   {
  //     id: 4,
  //     title: "Major Sports League Announces Expansion Teams for 2026 Season",
  //     category: "Sports",
  //     date: "Mar 2, 2025",
  //     readingTime: "6 min read",
  //     author: "Michael Johnson",
  //     image: "/api/placeholder/600/400",
  //     unread: false
  //   },
  //   {
  //     id: 5,
  //     title: "New Health Study Reveals Benefits of Mediterranean Diet",
  //     category: "Health",
  //     date: "Feb 28, 2025",
  //     readingTime: "9 min read",
  //     author: "Emily Rodriguez",
  //     image: "/api/placeholder/600/400",
  //     unread: true
  //   },
  //   {
  //     id: 6,
  //     title: "Artificial Intelligence Making Strides in Creative Arts",
  //     category: "Technology",
  //     date: "Feb 25, 2025",
  //     readingTime: "11 min read",
  //     author: "Daniel Lee",
  //     image: "/api/placeholder/600/400",
  //     unread: true
  //   }
  // ]);

    const [bookmarks, setBookmarks] = useState([]);
    const [hasBookmarks, setHasBookmarks] = useState(false);

  // Categories for tabs
  const categories = [
    { id: "all", name: "الكل", icon: <Bookmark size={14} /> },
    { id: "health", name: "الصحة", icon: <Star size={14} /> },
    { id: "agriculture", name: "زراعة", icon: <Star size={14} /> },
    { id: "politics", name: "سياسة", icon: <Star size={14} /> }
  ];
  
  // Set animation on load
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Function to remove bookmark
  const removeBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };
  
  // Check if there are any bookmarks
  
  // Sample card click handler
  const handleCardClick = () => {
    console.log('Card clicked - would open article');
  };
  
  // Get category color
  const getCategoryColor = (category) => {
    switch(category) {
      case "Technology": return "bg-[#7585ff]/10 text-[#7585ff] border-[#7585ff]/20";
      case "Business": return "bg-[#7585ff]/10 text-[#7585ff] border-[#7585ff]/20";
      case "Science": return "bg-[#7585ff]/10 text-[#7585ff] border-[#7585ff]/20";
      case "Sports": return "bg-[#7585ff]/10 text-[#7585ff] border-[#7585ff]/20";
      case "Health": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      default: return "bg-[#7585ff]/10 text-[#7585ff] border-[#7585ff]/20";
    }
  };
  useEffect(()=>{
    const getUserId = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/get-user", {
          withCredentials: true, // Important for sending cookies
        });
        
        console.log("✅ User ID received:", res.data.userId);
      } catch (error) {
        console.error("❌ Error fetching user:", error.response?.data || error.message);
      }
    };
    
    const getSavedArticles=async () => {
      
      const response=await axios.get("http://localhost:5000/api/artic/saved-articles",{withCredentials:true});
      
      const savedArticles = response.data.savedArticles || [];
      console.log(savedArticles)
      
      setBookmarks(savedArticles);
      setHasBookmarks(savedArticles.length > 0); 
      
      
    }

    getUserId();
    getSavedArticles();



  },[])
  


  console.log(hasBookmarks)
  
  // Tooltip component
  const Tooltip = ({ children, text }) => (
    <div className="group relative">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-[#7585ff] text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10 shadow-lg shadow-[#7585ff]/20">
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#7585ff]"></div>
      </div>
    </div>
  );

  return (
    // <div className="min-h-screen bg-gradient-to-br from-white to-[#7585ff]/5">
    //   {/* Header */}
    //   <header className="bg-white shadow-lg sticky top-0 z-10 transition-all duration-300 border-b-2 border-[#7585ff]/10">
    //     <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
    //       <div className="flex flex-col space-y-6">
    //         {/* Top section with logo and view toggle */}
    //         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
    //           <h1 className="text-3xl font-bold text-[#383838] flex items-center">
    //             <div className="mr-3 w-10 h-10 rounded-lg bg-[#7585ff] text-white flex items-center justify-center shadow-lg shadow-[#7585ff]/30 transform rotate-3">
    //               <Bookmark size={20} className="transform -rotate-3" />
    //             </div>
    //             <span className="relative">
    //               My Bookmarks
    //               <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#7585ff]/30 rounded-full"></span>
    //             </span>
    //           </h1>
              
    //           <div className="flex space-x-3 self-end sm:self-auto">
    //             <button 
    //               onClick={() => setViewMode('grid')}
    //               className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-500 ${
    //                 viewMode === 'grid' 
    //                   ? 'bg-[#7585ff] text-white border-[#7585ff] shadow-lg shadow-[#7585ff]/20 scale-105' 
    //                   : 'bg-white text-[#383838] border-gray-200 hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
    //               }`}
    //             >
    //               <LayoutGrid size={18} />
    //               <span className="inline-block font-medium">Grid</span>
    //             </button>
    //             <button 
    //               onClick={() => setViewMode('list')}
    //               className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-500 ${
    //                 viewMode === 'list' 
    //                   ? 'bg-[#7585ff] text-white border-[#7585ff] shadow-lg shadow-[#7585ff]/20 scale-105' 
    //                   : 'bg-white text-[#383838] border-gray-200 hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
    //               }`}
    //             >
    //               <List size={18} />
    //               <span className="inline-block font-medium">List</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
      
    //   {/* Category tabs */}
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-4">
    //     <div className="flex space-x-3 pb-4 overflow-x-auto scrollbar-hide">
    //       {categories.map((category) => (
    //         <button
    //           key={category.id}
    //           onClick={() => setActiveCategory(category.id)}
    //           className={`px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-500 flex items-center space-x-2 font-medium ${
    //             activeCategory === category.id
    //               ? 'bg-[#7585ff] text-white shadow-lg shadow-[#7585ff]/20 transform scale-105'
    //               : 'bg-white border-2 border-gray-200 text-[#383838] hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
    //           }`}
    //         >
    //           <span className={`inline-block transition-transform duration-500 ${activeCategory === category.id ? 'rotate-360' : ''}`}>{category.icon}</span>
    //           <span className="inline-block">{category.name}</span>
    //           {activeCategory === category.id && (
    //             <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-[#7585ff]">
    //               {bookmarks.length}
    //             </span>
    //           )}
    //         </button>
    //       ))}
    //     </div>
    //   </div>
      
    //   {/* Main content */}
    //   <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    //     {hasBookmarks ? (
    //       <div 
    //         className={`
    //           ${viewMode === 'grid' 
    //             ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
    //             : 'flex flex-col space-y-6'
    //           }
    //           opacity-0 transform translate-y-8 transition-all duration-1000 ease-out
    //           ${isLoaded ? 'opacity-100 translate-y-0' : ''}
    //         `}
    //       >
    //         {bookmarks.map((bookmark, index) => (
    //           <div 
    //             key={bookmark._id} 
    //             onClick={handleCardClick}
    //             className={`
    //               group bg-white rounded-2xl overflow-hidden transition-all duration-700 
    //               ${viewMode === 'list' ? 'flex' : 'flex flex-col'}
    //               opacity-0 transform translate-y-8
    //               ${isLoaded ? 'opacity-100 translate-y-0' : ''}
    //               transition-all duration-1000 ease-out
    //               border-2 border-transparent hover:border-[#7585ff]
    //               shadow-lg hover:shadow-xl hover:-translate-y-1
                  
    //               relative
    //             `}
    //             style={{ transitionDelay: `${index * 100}ms` }}
    //           >
    //             {/* Card decoration */}
    //             <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#7585ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-700 z-0"></div>
    //             <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#7585ff]/5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-700 delay-100 z-0"></div>
                
    //             {/* Article Image */}
    //             <div className={`
    //               relative overflow-hidden
    //               ${viewMode === 'list' ? 'flex-shrink-0 w-36 sm:w-56' : 'h-56'}
    //               z-10
    //             `}>
    //               <img 
    //                 src=""
    //                 alt={bookmark.title} 
    //                 className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
    //               />
                  
    //               {/* Image overlay with animated gradient */}
    //               <div className="absolute inset-0 bg-gradient-to-t from-[#383838]/80 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
    //               <div className="absolute inset-0 bg-gradient-to-tr from-[#7585ff]/40 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100"></div>
                  
    //               {/* Unread indicator */}
    //               {/* {bookmark.unread && (
    //                 <div className="absolute top-4 right-4 flex items-center space-x-2 bg-[#51a31d] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-[#51a31d]/30 backdrop-blur-sm group-hover:bg-opacity-90 transition-all duration-500">
    //                   <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
    //                   <span className="inline-block">New</span>
    //                 </div>
    //               )} */}
                  
    //               {/* Featured tag */}
    //               {/* {bookmark.featured && (
    //                 <div className="absolute top-4 left-4 bg-[#7585ff] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-[#7585ff]/30 backdrop-blur-sm transform group-hover:scale-110 transition-all duration-500">
    //                   <span className="inline-block">Featured</span>
    //                 </div>
    //               )} */}
    //             </div>
                
    //             {/* Article Content */}
    //             <div className="p-6 flex-grow flex flex-col relative z-10">
    //               {/* Category */}
    //               <div className="flex justify-between items-center mb-3">
    //                 {/* <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border-2 ${getCategoryColor(bookmark.category)} transform group-hover:scale-105 transition-transform duration-500`}>
    //                   {bookmark.category}
    //                 </span> */}
                    
    //                 {/* Reading time */}
    //                 <div className="flex items-center text-xs text-[#383838]/70 font-medium">
    //                   <Clock size={14} className="mr-1.5 text-[#7585ff]" />
    //                   <span className="inline-block">{bookmark.publishedDate}</span>
    //                 </div>
    //               </div>
                  
    //               {/* Title */}
    //               <h2 className="text-xl font-bold text-[#383838] mb-3 line-clamp-2 relative">
    //                 {bookmark.title}
    //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7585ff] transition-all duration-700 ease-in-out group-hover:w-full"></span>
    //               </h2>
                  
    //               {/* Author and date */}
    //               <div className="flex justify-between items-center text-sm mb-4">
    //                 <div className="flex items-center text-[#383838]/70">
    //                   <User size={15} className="mr-1.5 text-[#7585ff]" />
    //                   <span className="inline-block font-medium">{bookmark.content}</span>
    //                 </div>
                    
    //                 <div className="flex items-center text-[#383838]/70">
    //                   <Calendar size={15} className="mr-1.5 text-[#7585ff]" />
    //                   <span className="inline-block font-medium">{bookmark.createdAt}</span>
    //                 </div>
    //               </div>
                  
    //               {/* Spacer */}
    //               <div className="flex-grow min-h-6"></div>
                  
    //               {/* Actions */}
    //               <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 relative">
    //                 {/* Animated line */}
    //                 <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#7585ff]/30 transition-all duration-1000 ease-in-out group-hover:w-full"></div>
                    
    //                 {/* Action buttons */}
    //                 <div className="flex items-center space-x-3">
    //                   <Tooltip text="Read article">
    //                     <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7585ff]/10 text-[#7585ff] hover:bg-[#7585ff] hover:text-white transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-sm hover:shadow-md hover:shadow-[#7585ff]/20">
    //                       <BookOpen size={16} className="transition-transform duration-500 group-hover:rotate-360" />
    //                     </button>
    //                   </Tooltip>
                      
                    
    //                   {/*
    //                   <Tooltip text="Share">
    //                     <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#383838]/70 hover:bg-[#7585ff]/10 hover:text-[#7585ff] transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-sm hover:shadow-md">
    //                       <Share2 size={16} className="transition-transform duration-500 group-hover:rotate-360" />
    //                     </button>
    //                   </Tooltip> */}
    //                 </div>
                    
    //                 {/* Remove button */}
    //                 <Tooltip text="Remove bookmark">
    //                   <button 
    //                     onClick={(e) => removeBookmark(bookmark._id, e)}
    //                     className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#383838]/60 hover:bg-red-100 hover:text-red-600 transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-sm hover:shadow-md"
    //                     aria-label="Remove bookmark"
    //                   >
    //                     <Trash2 size={16} className="transition-transform duration-500 group-hover:rotate-360" />
    //                   </button>
    //                 </Tooltip>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <div className="bg-white rounded-2xl shadow-xl p-10 text-center transition-all duration-700 transform opacity-0 translate-y-8 animate-fadeIn">
    //         <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#7585ff]/10 flex items-center justify-center transform hover:rotate-6 transition-all duration-700 hover:scale-110 hover:shadow-lg hover:shadow-[#7585ff]/20 group">
    //           <Bookmark size={36} className="text-[#7585ff] transition-all duration-700 group-hover:rotate-12" />
    //         </div>
            
    //         <h2 className="text-2xl font-bold text-[#383838] mb-4">
    //           <span className="relative inline-block">
    //             No bookmarks yet
    //             <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#7585ff]/30 rounded-full"></span>
    //           </span>
    //         </h2>
    //         <p className="text-[#383838]/70 max-w-lg mx-auto mb-10">
    //           Your bookmarked articles will appear here. Save your favorite news and stories to read them later.
    //         </p>
            
    //         <div className="max-w-2xl mx-auto mt-10">
    //           <h3 className="text-xl font-bold mb-6 text-[#383838] relative inline-block">
    //             Suggested for you
    //             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7585ff]/50 rounded-full"></span>
    //           </h3>
              
    //           <div className="space-y-5">
    //             {[1, 2, 3].map((item) => (
    //               <div key={item} className="flex items-start space-x-5 p-5 rounded-xl hover:bg-[#7585ff]/5 cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-[#7585ff]/30 hover:shadow-lg group">
    //                 <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-lg">
    //                   <img 
    //                     src={`/api/placeholder/200/200?text=${item}`} 
    //                     alt="Suggested article" 
    //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    //                   />
    //                 </div>
    //                 <div className="flex-grow">
    //                   <h4 className="font-bold text-lg text-[#383838] mb-2 relative inline-block">
    //                     Suggested Article Title {item}
    //                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7585ff] transition-all duration-700 ease-in-out group-hover:w-full"></span>
    //                   </h4>
    //                   <div className="text-sm text-[#383838]/70 mb-3 flex items-center">
    //                     <Calendar size={14} className="mr-1.5 text-[#7585ff]" />
    //                     <span className="inline-block">Mar {item + 10}, 2025 · 5 min read</span>
    //                   </div>
    //                   <button className="text-[#7585ff] bg-[#7585ff]/10 hover:bg-[#7585ff] hover:text-white rounded-lg px-4 py-2 text-sm flex items-center w-fit transition-all duration-500 font-medium transform hover:translate-x-1 hover:shadow-md hover:shadow-[#7585ff]/20">
    //                     <Bookmark size={14} className="mr-1.5 transition-transform duration-500 group-hover:rotate-12" />
    //                     <span className="inline-block">Bookmark</span>
    //                   </button>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </main>
      
    //   {/* Style for animations */}
    //   <style jsx global>{`
    //     @keyframes fadeIn {
    //       from { opacity: 0; transform: translateY(30px); }
    //       to { opacity: 1; transform: translateY(0); }
    //     }
        
    //     .animate-fadeIn {
    //       animation: fadeIn 1s ease-out forwards;
    //       animation-delay: 0.3s;
    //     }
        
    //     .scrollbar-hide::-webkit-scrollbar {
    //       display: none;
    //     }
        
    //     .scrollbar-hide {
    //       -ms-overflow-style: none;
    //       scrollbar-width: none;
    //     }
        
    //     @keyframes pulse {
    //       0%, 100% { opacity: 0.8; transform: scale(1); }
    //       50% { opacity: 1; transform: scale(1.2); }
    //     }
        
    //     .animate-pulse {
    //       animation: pulse 2.5s infinite ease-in-out;
    //     }
        
    //     @keyframes rotate360 {
    //       from { transform: rotate(0deg); }
    //       to { transform: rotate(360deg); }
    //     }
        
    //     .rotate-360 {
    //       animation: rotate360 0.7s ease-in-out;
    //     }
    //   `}</style>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-white to-[#7585ff]/5" dir="rtl">
  {/* Header */}
  <header className="bg-white shadow-lg sticky top-0 z-10 transition-all duration-300 border-b-2 border-[#7585ff]/10">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
      <div className="flex flex-col space-y-6">
        {/* Top section with logo and view toggle */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold text-[#383838] flex items-center">
            <div className="ml-3 w-10 h-10 rounded-lg bg-[#7585ff] text-white flex items-center justify-center shadow-lg shadow-[#7585ff]/30 transform rotate-3">
              <Bookmark size={20} className="transform -rotate-3" />
            </div>
            <span className="relative">
              إشاراتي المرجعية
              <span className="absolute -bottom-1 right-0 w-full h-1 bg-[#7585ff]/30 rounded-full"></span>
            </span>
          </h1>
          
          <div className="flex space-x-3 space-x-reverse self-end sm:self-auto">
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg border transition-all duration-500 ${
                viewMode === 'grid' 
                  ? 'bg-[#7585ff] text-white border-[#7585ff] shadow-lg shadow-[#7585ff]/20 scale-105' 
                  : 'bg-white text-[#383838] border-gray-200 hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <LayoutGrid size={18} />
              <span className="inline-block font-medium">شبكة</span>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg border transition-all duration-500 ${
                viewMode === 'list' 
                  ? 'bg-[#7585ff] text-white border-[#7585ff] shadow-lg shadow-[#7585ff]/20 scale-105' 
                  : 'bg-white text-[#383838] border-gray-200 hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <List size={18} />
              <span className="inline-block font-medium">قائمة</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  {/* Category tabs */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-4">
    <div className="flex space-x-3 space-x-reverse pb-4 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-500 flex items-center space-x-2 space-x-reverse font-medium ${
            activeCategory === category.id
              ? 'bg-[#7585ff] text-white shadow-lg shadow-[#7585ff]/20 transform scale-105'
              : 'bg-white border-2 border-gray-200 text-[#383838] hover:border-[#7585ff] hover:text-[#7585ff] hover:shadow-md hover:-translate-y-1'
          }`}
        >
          <span className={`inline-block transition-transform duration-500 ${activeCategory === category.id ? 'rotate-360' : ''}`}>{category.icon}</span>
          <span className="inline-block">{category.name}</span>
          {activeCategory === category.id && (
            <span className="mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-[#7585ff]">
              {bookmarks.length}
            </span>
          )}
        </button>
      ))}
    </div>
  </div>
  
  {/* Main content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    {hasBookmarks ? (
      <div 
        className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'flex flex-col space-y-6'
          }
          opacity-0 transform translate-y-8 transition-all duration-1000 ease-out
          ${isLoaded ? 'opacity-100 translate-y-0' : ''}
        `}
      >
{bookmarks.map((bookmark, index) => (
  <div 
    key={bookmark._id} 
    onClick={handleCardClick}
    className={`
      group bg-white rounded-lg overflow-hidden transition-all duration-500 
      ${viewMode === 'list' ? 'flex flex-row-reverse' : 'flex flex-col'}
      opacity-0 transform translate-y-8
      ${isLoaded ? 'opacity-100 translate-y-0' : ''}
      transition-all duration-700 ease-out
      border border-gray-100 hover:border-[#7585ff]
      shadow-md hover:shadow-lg hover:-translate-y-1
      relative
    `}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Card decoration - more subtle for official look */}
    <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#7585ff]/5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 z-0"></div>
    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#7585ff]/5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100 z-0"></div>
    
    {/* Article Image */}
    <div className={`
      relative overflow-hidden
      ${viewMode === 'list' ? 'flex-shrink-0 w-36 sm:w-48' : 'h-48'}
      z-10
    `}>
      <img 
        src=""
        alt={bookmark.title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Image overlay with more subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#383838]/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#7585ff]/30 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* Category badge - positioned over image */}
      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-[#383838] px-3 py-1 rounded-md text-xs font-medium shadow-sm">
        {bookmark.category || "عام"}
      </div>
    </div>
    
    {/* Article Content */}
    <div className="p-5 flex-grow flex flex-col relative z-10">
      {/* Reading time and date - more clean and modern */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center text-xs text-[#383838]/70 font-medium">
          <Clock size={12} className="ml-1.5 text-[#7585ff]" />
          <span className="inline-block">{bookmark.publishedDate || "5 دقائق للقراءة"}</span>
        </div>
        
        <div className="flex items-center text-xs text-[#383838]/70 font-medium">
          <Calendar size={12} className="ml-1.5 text-[#7585ff]" />
          <span className="inline-block">{bookmark.createdAt || "14 مارس 2025"}</span>
        </div>
      </div>
      
      {/* Title - cleaner font styling */}
      <h2 className="text-lg font-bold text-[#383838] mb-2 line-clamp-2 relative group-hover:text-[#7585ff] transition-colors duration-300">
        {bookmark.title || "عنوان المقال"}
        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#7585ff] transition-all duration-500 ease-in-out group-hover:w-full"></span>
      </h2>
      
      {/* Author */}
      <div className="flex items-center text-sm mb-4 text-[#383838]/70">
        <User size={14} className="ml-1.5 text-[#7585ff]" />
        <span className="inline-block font-medium">{bookmark.content || "كاتب المقال"}</span>
      </div>
      
      {/* Description - added for better content preview */}
      <p className="text-sm text-[#383838]/80 mb-4 line-clamp-2">
        {bookmark.description || "وصف مختصر للمقال يظهر هنا. يمكن أن يحتوي على معلومات موجزة عن محتوى المقال."}
      </p>
      
      {/* Stats bar - NEW: added likes and views */}
      <div className="flex items-center justify-between mb-4 py-2 border-y border-gray-100">
        {/* Likes counter */}
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#7585ff]/5 text-[#7585ff] hover:bg-[#7585ff] hover:text-white transition-all duration-300 mb-1">
            <Heart size={14} className="transition-transform duration-300 hover:scale-110" />
          </button>
          <span className="text-xs font-medium text-[#383838]">{bookmark.likes}</span>
        </div>
        
        {/* Views counter */}
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#51a31d]/5 text-[#51a31d] hover:bg-[#51a31d] hover:text-white transition-all duration-300 mb-1">
            <Eye size={14} className="transition-transform duration-300 hover:scale-110" />
          </button>
          <span className="text-xs font-medium text-[#383838]">{bookmark.views}</span>
        </div>
        
        {/* Share button */}
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#383838]/5 text-[#383838]/70 hover:bg-[#383838] hover:text-white transition-all duration-300 mb-1">
            <Share2 size={14} className="transition-transform duration-300 hover:scale-110" />
          </button>
          <span className="text-xs font-medium text-[#383838]">مشاركة</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex justify-between items-center relative">
        {/* Read button - modernized */}
        <button className="flex items-center text-[#7585ff] hover:text-white bg-[#7585ff]/10 hover:bg-[#7585ff] rounded-md px-3 py-1.5 text-sm transition-all duration-300 font-medium">
          <BookOpen size={14} className="ml-1.5" />
          <span className="inline-block">قراءة المقال</span>
        </button>
        
        {/* Remove button - modernized */}
        <Tooltip text="إزالة الإشارة المرجعية">
          <button 
            onClick={(e) => removeBookmark(bookmark._id, e)}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-[#383838]/60 hover:bg-red-100 hover:text-red-500 transition-all duration-300"
            aria-label="إزالة الإشارة المرجعية"
          >
            <Trash2 size={14} />
          </button>
        </Tooltip>
      </div>
    </div>
  </div>
))}
      </div>
    ) : (
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center transition-all duration-700 transform opacity-0 translate-y-8 animate-fadeIn">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#7585ff]/10 flex items-center justify-center transform hover:rotate-6 transition-all duration-700 hover:scale-110 hover:shadow-lg hover:shadow-[#7585ff]/20 group">
          <Bookmark size={36} className="text-[#7585ff] transition-all duration-700 group-hover:rotate-12" />
        </div>
        
        <h2 className="text-2xl font-bold text-[#383838] mb-4">
          <span className="relative inline-block">
            لا توجد إشارات مرجعية حتى الآن
            <span className="absolute -bottom-1 right-0 w-full h-1 bg-[#7585ff]/30 rounded-full"></span>
          </span>
        </h2>
        <p className="text-[#383838]/70 max-w-lg mx-auto mb-10">
          ستظهر المقالات التي قمت بحفظها هنا. احفظ أخبارك وقصصك المفضلة لقراءتها لاحقًا.
        </p>
        
        <div className="max-w-2xl mx-auto mt-10">
          <h3 className="text-xl font-bold mb-6 text-[#383838] relative inline-block">
            مقترحات لك
            <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-[#7585ff]/50 rounded-full"></span>
          </h3>
          
          <div className="space-y-5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-row-reverse items-start space-x-5 space-x-reverse p-5 rounded-xl hover:bg-[#7585ff]/5 cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-[#7585ff]/30 hover:shadow-lg group">
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-lg">
                  <img 
                    src={`/api/placeholder/200/200?text=${item}`} 
                    alt="مقال مقترح" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex-grow text-right">
                  <h4 className="font-bold text-lg text-[#383838] mb-2 relative inline-block">
                    عنوان المقال المقترح {item}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#7585ff] transition-all duration-700 ease-in-out group-hover:w-full"></span>
                  </h4>
                  <div className="text-sm text-[#383838]/70 mb-3 flex items-center">
                    <Calendar size={14} className="ml-1.5 text-[#7585ff]" />
                    <span className="inline-block">مارس {item + 10}، 2025 · للقراءة 5 دقائق</span>
                  </div>
                  <button className="text-[#7585ff] bg-[#7585ff]/10 hover:bg-[#7585ff] hover:text-white rounded-lg px-4 py-2 text-sm flex items-center transition-all duration-500 font-medium transform hover:translate-x-1 hover:shadow-md hover:shadow-[#7585ff]/20">
                    <Bookmark size={14} className="ml-1.5 transition-transform duration-500 group-hover:rotate-12" />
                    <span className="inline-block">حفظ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </main>
</div>
  );
};

export default BookmarkPage;