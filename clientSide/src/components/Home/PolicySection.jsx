// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import "swiper/css/autoplay";
// // import { Autoplay } from "swiper/modules";
// // import { Newspaper, User } from "lucide-react";


// // const API_KEY = "d09ac7de56d941aeb6e925d426d39afb"; // ضع مفتاح API هنا



// // const newsSlides = [
// //   {
// //     title: "The Unchecked Authority of Greg Abbott",
// //     description:
// //       "The Texas governor is an unlikely MAGA crusader, but he has turned the Lone Star State into ground zero for President Trump’s radical mass-deportation plans.",
// //     image: "https://source.unsplash.com/1200x600/?politics",
// //     author: "Jonathan Blitzer",
// //   },
// //   {
// //     title: "The Future of AI in Journalism",
// //     description:
// //       "AI is rapidly transforming journalism, raising questions about ethics, accuracy, and the future of human reporters.",
// //     image: "https://source.unsplash.com/1200x600/?technology",
// //     author: "Sarah Johnson",
// //   },
// // ];

// // const articles = [
// //   {
// //     title: "'Eephus' Is as Surprising as the Baseball Pitch It's Named For",
// //     description:
// //       "In Carson Lund’s stylistically innovative directorial debut, two amateur teams say farewell to a beloved field—but will their game yield a result?",
// //     image: "https://source.unsplash.com/400x400/?baseball",
// //     author: "Richard Brody",
// //   },
// //   {
// //     title: "How 'Severance' Makes a Fetish of the Office",
// //     description:
// //       "In its second season, the show continues to indict the corporate workplace while secretly longing for it.",
// //     image: "https://source.unsplash.com/400x400/?office",
// //     author: "Katy Waldman",
// //   },
// //   {
// //     title: "The Resounding Silences of 'On Becoming a Guinea Fowl'",
// //     description:
// //       "In Rungano Nyoni’s drama, a death in a middle-class Zambian family unearths a history of sexual violence.",
// //     image: "https://source.unsplash.com/400x400/?movie",
// //     author: "Justin Chang",
// //   },
// // ];

// // const PolicySection = () => {
// //     const [externalNews, setExternalNews] = useState([]);

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await axios.get(
// //           `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=3&apiKey=${API_KEY}`
// //         );
// //         setExternalNews(response.data.articles);
// //       } catch (error) {
// //         console.error("Error fetching news:", error);
// //       }
// //     };

// //     fetchNews();
// //   }, []);
// //   return (
// //     // <>
    
// //     //   <div className="max-w-6xl mx-auto py-10 px-4">
// //     //     <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3">
// //     //       <Newspaper className="text-[#383838] w-8 h-8" /> Policy News
// //     //     </h2>
        
// //     //     {/* Slideshow */}
// //     //     <Swiper
// //     //       modules={[Autoplay]}
// //     //       autoplay={{ delay: 5000, disableOnInteraction: false }}
// //     //       loop
// //     //       className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
// //     //     >
// //     //       {newsSlides.map((slide, index) => (
// //     //         <SwiperSlide key={index} className="relative">
// //     //           <div
// //     //             className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
// //     //             style={{ backgroundImage: `url(${slide.image})` }}
// //     //           >
// //     //             <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
// //     //               <h3 className="text-3xl font-bold">{slide.title}</h3>
// //     //               <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
// //     //               <span className="mt-6 text-sm flex items-center gap-2 justify-center">
// //     //                 <User className="w-5 h-5" /> {slide.author}
// //     //               </span>
// //     //             </div>
// //     //           </div>
// //     //         </SwiperSlide>
// //     //       ))}
// //     //     </Swiper>

// //     //     {/* Articles */}
// //     //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
// //     //       {articles.map((article, index) => (
// //     //         <div
// //     //           key={index}
// //     //           className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
// //     //         >
// //     //           <img
// //     //             src={article.image}
// //     //             alt={article.title}
// //     //             className="w-full h-52 object-cover rounded-lg shadow-md"
// //     //           />
// //     //           <div className="p-5 flex flex-col flex-grow">
// //     //             <h4 className="font-extrabold text-xl text-[#383838]">{article.title}</h4>
// //     //             <p className="text-md mt-3 text-gray-700 flex-grow leading-relaxed">{article.description}</p>
// //     //             <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 justify-center">
// //     //               <User className="w-5 h-5" /> {article.author}
// //     //             </span>
// //     //           </div>
// //     //         </div>
// //     //       ))}
// //     //     </div>
// //     //   </div>
// //     // </>
// //      <div className="max-w-6xl mx-auto py-10 px-4">
// //       <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3">
// //         <Newspaper className="text-[#383838] w-8 h-8" /> Policy News
// //       </h2>

// //       {/* Container for Slideshow and Articles */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
// //         {/* Slideshow Section (Left) */}
// //         <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
// //           <Swiper
// //             modules={[Autoplay]}
// //             autoplay={{ delay: 5000, disableOnInteraction: false }}
// //             loop
// //             className="w-full h-full"
// //           >
// //             {newsSlides.map((slide, index) => (
// //               <SwiperSlide key={index} className="relative">
// //                 <div
// //                   className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
// //                   style={{ backgroundImage: `url(${slide.image})` }}
// //                 >
// //                   <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
// //                     <h3 className="text-3xl font-bold">{slide.title}</h3>
// //                     <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
// //                     <span className="mt-6 text-sm flex items-center gap-2 justify-center">
// //                       <User className="w-5 h-5" /> {slide.author}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>

// //         {/* Articles Section (Right) */}
// //         <div className="grid grid-rows-3 gap-8">
// //           {articles.map((article, index) => (
// //             <div
// //               key={index}
// //               className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
// //             >
// //               <img
// //                 src={article.image}
// //                 alt={article.title}
// //                 className="w-full h-40 object-cover rounded-lg shadow-md"
// //               />
// //               <div className="p-5 flex flex-col flex-grow">
// //                 <h4 className="font-extrabold text-xl text-[#383838]">{article.title}</h4>
// //                 <p className="text-md mt-3 text-gray-700 flex-grow leading-relaxed">{article.description}</p>
// //                 <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 justify-center">
// //                   <User className="w-5 h-5" /> {article.author}
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default PolicySection;

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import { Newspaper, User, ExternalLink } from "lucide-react";

// const newsSlides = [
//   {
//     title: "The Unchecked Authority of Greg Abbott",
//     description:
//       "The Texas governor is an unlikely MAGA crusader, but he has turned the Lone Star State into ground zero for President Trump’s radical mass-deportation plans.",
//     image: "https://source.unsplash.com/1200x600/?politics",
//     author: "Jonathan Blitzer",
//   },
//   {
//     title: "The Future of AI in Journalism",
//     description:
//       "AI is rapidly transforming journalism, raising questions about ethics, accuracy, and the future of human reporters.",
//     image: "https://source.unsplash.com/1200x600/?technology",
//     author: "Sarah Johnson",
//   },
// ];

// const articles = [
//   {
//     title: "'Eephus' Is as Surprising as the Baseball Pitch It's Named For",
//     description:
//       "In Carson Lund’s stylistically innovative directorial debut, two amateur teams say farewell to a beloved field—but will their game yield a result?",
//     image: "https://source.unsplash.com/400x400/?baseball",
//     author: "Richard Brody",
//   },
//   {
//     title: "How 'Severance' Makes a Fetish of the Office",
//     description:
//       "In its second season, the show continues to indict the corporate workplace while secretly longing for it.",
//     image: "https://source.unsplash.com/400x400/?office",
//     author: "Katy Waldman",
//   },
//   {
//     title: "The Resounding Silences of 'On Becoming a Guinea Fowl'",
//     description:
//       "In Rungano Nyoni’s drama, a death in a middle-class Zambian family unearths a history of sexual violence.",
//     image: "https://source.unsplash.com/400x400/?movie",
//     author: "Justin Chang",
//   },
// ];

// const PolicySection = () => {
//   const [externalNews, setExternalNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d09ac7de56d941aeb6e925d426d39afb"
//         );
//         const data = await response.json();
//         setExternalNews(data.articles.slice(0, 5)); // Get only 5 articles
//       } catch (error) {
//         console.error("Error fetching external news:", error);
//       }
//     };
//     fetchNews();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3">
//         <Newspaper className="text-[#383838] w-8 h-8" /> Policy News
//       </h2>

//       {/* Container for Slideshow and Articles */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Slideshow Section (Left) */}
//         <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             loop
//             className="w-full h-full"
//           >
//             {newsSlides.map((slide, index) => (
//               <SwiperSlide key={index} className="relative">
//                 <div
//                   className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 >
//                   <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
//                     <h3 className="text-3xl font-bold">{slide.title}</h3>
//                     <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
//                     <span className="mt-6 text-sm flex items-center gap-2 justify-center">
//                       <User className="w-5 h-5" /> {slide.author}
//                     </span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Articles Section (Right) */}
//         <div className="grid grid-rows-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
//             >
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-40 object-cover rounded-lg shadow-md"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h4 className="font-extrabold text-xl text-[#383838]">{article.title}</h4>
//                 <p className="text-md mt-3 text-gray-700 flex-grow leading-relaxed">{article.description}</p>
//                 <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 justify-center">
//                   <User className="w-5 h-5" /> {article.author}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* External News Slider */}
//       <div className="mt-10">
//         <h3 className="text-2xl font-bold text-center mb-6">Latest News from External API</h3>
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop
//           className="w-full h-[300px] rounded-lg overflow-hidden shadow-2xl"
//         >
//           {externalNews.map((news, index) => (
//             <SwiperSlide key={index} className="p-6 bg-gray-100 rounded-lg text-center">
//               <h4 className="text-xl font-semibold mb-2">{news.title}</h4>
//               <p className="text-gray-700 text-sm mb-4">{news.description}</p>
//               <a
//                 href={news.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 flex items-center justify-center gap-1"
//               >
//                 Read more <ExternalLink className="w-4 h-4" />
//               </a>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default PolicySection;

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import { Newspaper, User, ExternalLink } from "lucide-react";

// const newsSlides = [
//   {
//     title: "The Unchecked Authority of Greg Abbott",
//     description:
//       "The Texas governor is an unlikely MAGA crusader, but he has turned the Lone Star State into ground zero for President Trump's radical mass-deportation plans.",
//     image: "https://source.unsplash.com/1200x600/?politics",
//     author: "Jonathan Blitzer",
//   },
//   {
//     title: "The Future of AI in Journalism",
//     description:
//       "AI is rapidly transforming journalism, raising questions about ethics, accuracy, and the future of human reporters.",
//     image: "https://source.unsplash.com/1200x600/?technology",
//     author: "Sarah Johnson",
//   },
// ];

// const articles = [
//   {
//     title: "'Eephus' Is as Surprising as the Baseball Pitch It's Named For",
//     description:
//       "In Carson Lund's stylistically innovative directorial debut, two amateur teams say farewell to a beloved field—but will their game yield a result?",
//     image: "https://source.unsplash.com/400x400/?baseball",
//     author: "Richard Brody",
//   },
//   {
//     title: "How 'Severance' Makes a Fetish of the Office",
//     description:
//       "In its second season, the show continues to indict the corporate workplace while secretly longing for it.",
//     image: "https://source.unsplash.com/400x400/?office",
//     author: "Katy Waldman",
//   },
//   {
//     title: "The Resounding Silences of 'On Becoming a Guinea Fowl'",
//     description:
//       "In Rungano Nyoni's drama, a death in a middle-class Zambian family unearths a history of sexual violence.",
//     image: "https://source.unsplash.com/400x400/?movie",
//     author: "Justin Chang",
//   },
// ];

// const PolicySection = () => {
//   const [externalNews, setExternalNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d09ac7de56d941aeb6e925d426d39afb"
//         );
//         const data = await response.json();
//         setExternalNews(data.articles.slice(0, 5)); // Get only 5 articles
//       } catch (error) {
//         console.error("Error fetching external news:", error);
//       }
//     };
//     fetchNews();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3">
//         <Newspaper className="text-[#383838] w-8 h-8" /> Policy News
//       </h2>

//       {/* Container for Articles and Sliders */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Articles Section (Left) */}
//         <div className="grid grid-rows-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
//             >
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-40 object-cover rounded-lg shadow-md"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h4 className="font-extrabold text-xl text-[#383838]">{article.title}</h4>
//                 <p className="text-md mt-3 text-gray-700 flex-grow leading-relaxed">{article.description}</p>
//                 <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 justify-center">
//                   <User className="w-5 h-5" /> {article.author}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Sliders Section (Right) */}
//         <div className="flex flex-col gap-8">
//           {/* Main News Slider */}
//           <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-2xl">
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               loop
//               className="w-full h-full"
//             >
//               {newsSlides.map((slide, index) => (
//                 <SwiperSlide key={index} className="relative">
//                   <div
//                     className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
//                     style={{ backgroundImage: `url(${slide.image})` }}
//                   >
//                     <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
//                       <h3 className="text-3xl font-bold">{slide.title}</h3>
//                       <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
//                       <span className="mt-6 text-sm flex items-center gap-2 justify-center">
//                         <User className="w-5 h-5" /> {slide.author}
//                       </span>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           {/* External News Slider - Now positioned directly under the main slider */}
//           <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-2xl">
//             <h3 className="text-2xl font-bold text-center mb-2">Latest News</h3>
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{ delay: 4000, disableOnInteraction: false }}
//               loop
//               className="w-full h-full"
//             >
//               {externalNews.length > 0 ? (
//                 externalNews.map((news, index) => (
//                   <SwiperSlide key={index} className="p-6 bg-gray-100 rounded-lg text-center">
//                     <h4 className="text-lg font-semibold mb-2 line-clamp-1">{news.title}</h4>
//                     <p className="text-gray-700 text-sm mb-4 line-clamp-2">{news.description}</p>
//                     <a
//                       href={news.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 flex items-center justify-center gap-1"
//                     >
//                       Read more <ExternalLink className="w-4 h-4" />
//                     </a>
//                   </SwiperSlide>
//                 ))
//               ) : (
//                 <SwiperSlide className="p-6 bg-gray-100 rounded-lg text-center">
//                   <p>Loading latest news...</p>
//                 </SwiperSlide>
//               )}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PolicySection;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Newspaper, User, ExternalLink } from "lucide-react";
import axios from "axios";

const newsSlides = [
  {
    title: "The Unchecked Authority of Greg Abbott",
    description:
      "The Texas governor is an unlikely MAGA crusader, but he has turned the Lone Star State into ground zero for President Trump's radical mass-deportation plans.",
    image: "https://source.unsplash.com/1200x600/?politics",
    author: "Jonathan Blitzer",
  },
  {
    title: "The Future of AI in Journalism",
    description:
      "AI is rapidly transforming journalism, raising questions about ethics, accuracy, and the future of human reporters.",
    image: "https://source.unsplash.com/1200x600/?technology",
    author: "Sarah Johnson",
  },
];

const articles = [
  {
    title: "'Eephus' Is as Surprising as the Baseball Pitch It's Named For",
    description:
      "In Carson Lund's stylistically innovative directorial debut, two amateur teams say farewell to a beloved field—but will their game yield a result?",
    image: "https://source.unsplash.com/400x400/?baseball",
    author: "Richard Brody",
  },
  {
    title: "How 'Severance' Makes a Fetish of the Office",
    description:
      "In its second season, the show continues to indict the corporate workplace while secretly longing for it.",
    image: "https://source.unsplash.com/400x400/?office",
    author: "Katy Waldman",
  },
  {
    title: "The Resounding Silences of 'On Becoming a Guinea Fowl'",
    description:
      "In Rungano Nyoni's drama, a death in a middle-class Zambian family unearths a history of sexual violence.",
    image: "https://source.unsplash.com/400x400/?movie",
    author: "Justin Chang",
  },
];

const PolicySection = () => {
  const [externalNews, setExternalNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d09ac7de56d941aeb6e925d426d39afb"
        );
        const data = await response.json();
        setExternalNews(data.articles.slice(0, 5)); // Get only 5 articles
      } catch (error) {
        console.error("Error fetching external news:", error);
      }
    };
    fetchNews();
  }, []);


    const[newsSlide,setnewsSlide]=useState([]);
    useEffect(()=>{
      
      async function getNewsSlide(){
        
        const response=await axios.get("http://localhost:5000/api/home-articles/policy");
        console.log(response.data.data);
    setnewsSlide(response.data.data)
    
    }
  
  getNewsSlide();
  
  },[])

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mt-30">
      <h2 className="text-center text-4xl font-extrabold text-[#383838] mb-8 flex items-center justify-center gap-3 mb-15">
        <Newspaper className="text-[#383838] w-8 h-8" /> Policy News
      </h2>

      {/* Container for Articles and Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Articles Section (Left) - Reduced size */}
        <div className="grid grid-rows-3 gap-6">
          {newsSlide.slice(0,3).map((article, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-3 transition-all hover:scale-102 bg-[#f9f9fb] hover:shadow-lg flex overflow-hidden"
            >
              {/* Left: Image */}
              <div className="w-1/3 mr-3">
                <img
                  src={article.
featuredImage}
                  alt={article.title}
                  className="w-full h-28 object-cover rounded shadow-sm"
                />
              </div>
              
              {/* Right: Content */}
              <div className="w-2/3 flex flex-col">
                <h4 className="font-bold text-md text-[#383838] line-clamp-2">{article.title}</h4>
                <p className="text-xs mt-1 text-gray-700 flex-grow line-clamp-3">{article.description}</p>
                <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <User className="w-3 h-3" /> {article.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sliders Section (Right) */}
        <div className="flex flex-col gap-8">
          {/* Main News Slider */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-2xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="w-full h-full"
            >
              {newsSlide.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <div
                    className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1720811119383-96f0dade1e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D)` }}
                  >
                    <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
                      <h3 className="text-3xl font-bold">{slide.title}</h3>
                      <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
                      <span className="mt-6 text-sm flex items-center gap-2 justify-center">
                        <User className="w-5 h-5" /> {slide.author}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* External News Slider */}
          <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-2">Latest News</h3>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="w-full h-full"
            >
              {externalNews.length > 0 ? (
                externalNews.map((news, index) => (
                  <SwiperSlide key={index} className="p-6 bg-gray-100 rounded-lg text-center">
                    <h4 className="text-lg font-semibold mb-2 line-clamp-1">{news.title}</h4>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{news.description}</p>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 flex items-center justify-center gap-1"
                    >
                      Read more <ExternalLink className="w-4 h-4" />
                    </a>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="p-6 bg-gray-100 rounded-lg text-center">
                  <p>Loading latest news...</p>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;