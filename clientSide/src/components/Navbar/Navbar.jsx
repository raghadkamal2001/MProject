// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';

// const navigation = [
//   { name: 'الصفحة الرئيسية', href: '/', current: true },
//   { name: 'عن الموقع', href: '/about-us', current: false },
//   { name: 'إنشاء مقال', href: '/article/submit', current: false },
//   { name: 'تفاصيل المقال', href: '/ ArticleDetailPage', current: false },
//   { name: 'المقالات المحفوظة', href: '/BookmarkPage', current: false },
//   { name: 'صفحات الفئات', href: '/category-pages', current: false },
//   { name: 'تواصل معنا', href: '/contact-us', current: false },
//   { name: 'تسجيل الدخول', href: '/auth', current: false },
//   { name: 'الملف الشخصي', href: '/profile', current: false },
//   { name: 'لوحة الإدارة', href: '/admin-dashboard', current: false },
//   { name: 'تسجيل الناشر', href: '/register-publisher', current: false },
//   { name: 'ملف الناشر', href: '/publisher-profile', current: false }
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="size-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="size-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden">
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// } 


import React, { useState } from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'الصفحة الرئيسية', href: '/', current: true },
  { name: 'عن يقين', href: '/about-us', current: false },
  { name: 'انشر مقال', href: '/article/submit', current: false },
  { name: 'المقالات ', href: '/category-pages', current: false },
  { name: 'تواصل معنا', href: '/contact-us', current: false },
  { name: 'تسجيل الدخول', href: '/auth', current: false },
  { name: 'انضم إلينا', href: '/register-publisher', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


const Example = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full  shadow-sm bg-white" dir='ltr'>
      {/* Top Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        {/* <div className="flex items-center">
          <div className="text-teal-500 font-bold text-2xl">يقين</div>
          <div className="text-gray-500 text-xs mr-1">الخبر ما هو</div>
        </div> */}

         {/* Login Button */}
         {navigation.map((item) => (
        item.name === 'تسجيل الدخول' && (
        <Link key={item.name} to={item.href}>
        <button className="bg-black text-white rounded-full px-5 py-3 mr-4 text-sm hover:bg-[#51a31d]">
        {item.name}
        </button>
        </Link>
  )
))}
        {/* Logo */}
      <div className="flex items-center  ">
      <img src="https://media.discordapp.net/attachments/1326085515585257482/1350582243604693052/image.png?ex=67d7433b&is=67d5f1bb&hm=ec4d835d31ebf2ab7f63ef08a469e39815c24de2239d2ce1a2708b6bf475b16a&=&format=webp&quality=lossless&width=393&height=207" alt="شعار يقين" 
        className="h-30 w-50" />

          </div>

        
        {/* Middle Buttons (only visible on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center ">
          {/* Search and Bell Icons */}
          <div className="flex items-center">
            <button className="p-2 hover:text-[#51a31d] ">
              <Search size={25} />
            </button>
            <button className="p-2 hover:text-[#51a31d]">
              <Bell size={25} />
            </button>
            <button className="p-2 hover:text-[#51a31d]">
            <User size={25} /> {/* أيقونة ملف شخصي */}
           </button>
          </div>
          
         
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="container mx-auto border-t border-gray-100">
        <div className="flex justify-center md:justify-center items-center text-l py-2">
          <a href="/contact-us" className="px-4 py-2 hover:text-[#51a31d]">تواصل معنا</a>
          <a href="/about-us" className="px-4 py-2 hover:text-[#51a31d]">عن يقين</a>
          <a href="/register-publisher" className="px-4 py-2 hover:text-[#51a31d]">انضم إلينا</a>
          <a href="/article/submit" className="px-4 py-2 hover:text-[#51a31d]">انشر مقال</a>  
          <a href="/category-pages" className="px-4 py-2 hover:text-[#51a31d]">المقالات</a>
          <a href="/" className="px-4 py-2 hover:text-[#51a31d]">الصفحة الرئيسية</a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute z-10 shadow-md">
          <div className="flex flex-col">
            <a href="/" className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">الصفحة الرئيسية</a>
            <a href="#" className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">المقالات</a>
            <a href="#" className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">انشر مقال</a>
            <a href="#" className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">انضم إلينا</a>
            <a href="#" className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">عن يقين</a>
            <a href="/contact-us" className="px-4 py-3 hover:bg-gray-50">تواصل معنا</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Example;
