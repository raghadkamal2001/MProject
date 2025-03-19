import React from 'react';
import { Youtube, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <div className="font-sans bg-black">
      {/* Main Footer Section */}
      <div className="w-full border-t border-[#51a31d] pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Right Column */}
            <div className="text-right text-white">
              <h3 className="font-bold text-lg mb-4">عن  يقين</h3>
              <ul className="space-y-2">
                <li><a href="/about-us" className="hover:text-[#51a31d]">نبذة عن يقين </a></li>
                <li><a href="/category-pages" className="hover:text-[#51a31d]">المقالات</a></li>
                <li><a href="#" className="hover:text-[#51a31d]">أعلن معنا  </a></li>
                <li><a href="#" className="hover:text-[#51a31d]">أخبار الجمعيات والمؤسسات</a></li>
              </ul>
            </div>

            {/* Middle Column */}
            <div className="text-right text-white">
              <h3 className="font-bold text-lg mb-4">روابط قد تهمك</h3>
              <ul className="space-y-2">
                <li><a href="category-pages" className="hover:text-[#51a31d]">آخر الأخبار  </a></li>
                <li><a href="#" className="hover:text-[#51a31d]">     النشرات البريدية</a></li>
                <li><a href="/register-publisher" className="hover:text-[#51a31d]">انضم لنا</a></li>
                <li><a href="/contact-us" className="hover:text-[#51a31d]">اتصل بنا</a></li>
              </ul>
            </div>

            {/* Left Column */}
            <div className="text-right text-white">
              <h3 className="font-bold text-lg mb-4">اشترك في يقين</h3>
              <p className="text-sm mb-4">اشترك في نشرة يقين الإخبارية.</p>
              
              {/* Email Form */}
              <div className="mb-4 color-white">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full py-2 px-3 border-b-2 border-[#51a31d] outline-none text-right "
                />
              </div>
              
              <button className="bg-[#51a31d] text-white py-3 px-6 rounded-lg w-full hover:bg-gray-800 transition-colors">
                اشترك في نشرة يقين 
              </button>
             
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Section */}
      <div className="bg-black text-white  py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex font-bold space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-300"><Youtube size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            </div>
            
            
            
            {/* Copyright */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
              <a href="#" className="hover:text-gray-300 text-right">سياسة الخصوصية</a>
              <a href="#" className="hover:text-gray-300 text-right">الشروط والأحكام</a>
              <span className="text-right">جميع الحقوق محفوظة لموقع يقين الإخباري</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;