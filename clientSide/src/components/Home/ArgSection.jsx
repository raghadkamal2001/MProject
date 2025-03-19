// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import { Newspaper, User } from "lucide-react";
// import{ useEffect, useState } from "react";
// import axios from "axios";


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

// const ArgSection = () => {

//     const[newsSlide,setnewsSlide]=useState([]);
//   useEffect(()=>{
    
//     async function getNewsSlide(){
      
//       const response=await axios.get("http://localhost:5000/api/home-articles/arg");
//       console.log(response.data.data);
//   setnewsSlide(response.data.data)
  
//   }

// getNewsSlide();

// },[])
  
//   return (
//     <>
    
      
//       <div className=" text-[#383838] m-15 mt-5">
//        <div className="bg-white h-10 flex  mr-20 gap-3">
//    <div className="flex items-center space-x-2">
//    <div className="h-6 w-1 bg-[#51a31d]"></div>
//     <span className="text-2xl font-bold text-black">أخبار في الزراعة :</span>
   
//   </div>
// </div>
//         {/* Slideshow */}
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
//         >
//           {newsSlide.map((slide, index) => (
//             <SwiperSlide key={index} className="relative">
//               <div
//                 className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10 text-white"
//                 style={{ backgroundImage: `url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
//               >
//                 <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-2xl">
//                   <h3 className="text-3xl font-bold">{slide.title}</h3>
//                   <p className="mt-4 text-lg leading-relaxed">{slide.description}</p>
//                   <span className="mt-6 text-sm flex items-center gap-2 justify-center">
//                     <User className="w-5 h-5" /> {slide.author}
//                   </span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Articles */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
//           {newsSlide.map((article, index) => (
//             <div
//               key={index}
//               className="border rounded-lg shadow-xl p-5 transition-all hover:scale-105 bg-[#f9f9fb] hover:shadow-2xl flex flex-col items-center text-center overflow-hidden"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1731964877414-217cdc9b5b37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt={article.title}
//                 className="w-full h-52 object-cover rounded-lg shadow-md"
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
//     </>
//   );
// };

// export default ArgSection;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Newspaper, User } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import axios from "axios";





const ArgSection = () => {
  const[newsSlide,setnewsSlide]=useState([]);
  useEffect(()=>{
    
    async function getNewsSlide(){
      
      const response=await axios.get("http://localhost:5000/api/home-articles/arg");
      console.log(response.data.data);
  setnewsSlide(response.data.data)
  
  }

getNewsSlide();

},[])
  return (
    <>
    
      <div className=" text-[#383838] m-15 mt-5">
      <div className="bg-white h-10 flex  mr-20 gap-3">
  <div className="flex items-center space-x-2">
  <div className="h-6 w-1 bg-[#51a31d]"></div>
    <span className="text-2xl font-bold text-black">أخبار في الزراعة :</span>
   
  </div>
</div>

        <div className="text-[#383838] relative  py-4">
      <div className="container mx-auto px-0 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="w-full relative"
        >
          {newsSlide.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[450px] w-[1500px] mr-2 overflow-hidden">
              <div
  className="absolute inset-0 bg-center bg-cover"
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
  }}
>
  {/* إضافة التأثير مع التدرج الأخضر */}
  <div
    className="absolute inset-0 bg-gradient-to-t from-black/80 via-green-900/60 to-transparent"
  ></div>
</div>

                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <div className="flex items-center mb-2">
                    <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1 ml-5">
                      NEWS
                    </span>
                    <div className="flex items-center">
                      <span className="text-xs opacity-80">
                        {new Date(slide.publishedDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-xs opacity-80">{slide.author}</span>
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold uppercase mb-2 ">{slide.title}</h2>
                  <p className="text-lg opacity-80">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev !text-white  w-8 h-8 rounded-full flex items-center justify-center !left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
        

{/* Articles */}

<div className="bg-white h-10 flex  mr-20 gap-3 mt-7">
  <div className="flex items-center space-x-2">
  <div className="h-6 w-1 bg-[#51a31d]"></div>
    <span className="text-2xl font-bold text-black"> تعرف على اهم المقالات لدينا  :</span>
   
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
  {newsSlide.slice(0, 4).map((article, index) => (
    <React.Fragment key={index}>
      <div>
        <div className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
          <div className="overflow-hidden rounded-lg mb-3 relative">
            <img
              src={`http://localhost:5000/${article.featuredImage}`}
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <h2 className="text-lg font-bold text-[#383838] mb-1 hover:text-[#5D8736] transition-colors duration-300">{article.title}</h2>
          <div className="text-xs text-gray-500 mb-2">
            بواسطة {article.author}
          </div>
          <p className="text-sm">{article.description}</p>

        </div>
      </div>
    </React.Fragment>
  ))}
</div>


      </div>
    </>
  );
};

export default ArgSection;