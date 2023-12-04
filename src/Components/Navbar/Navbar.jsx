/* eslint-disable no-unused-vars */
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ThemeToggleButton from '../Theme/ThemeToggleButton';
import { useState } from 'react';
import { Collapse } from '@material-tailwind/react';


const Navbar = () => {
   const [openNav, setOpenNav] = useState(false);
   const navLinks = (
      <>
         <li>
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
               Home
            </ScrollLink>
         </li>
         <li>
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
               About
            </ScrollLink>
         </li>
         <li>
            <ScrollLink to="experience" spy={true} smooth={true} offset={-70} duration={500}>
               Experience
            </ScrollLink>
         </li>
         <li>
            <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
               Projects
            </ScrollLink>
         </li>
         <li>
            <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500}>
               Skills
            </ScrollLink>
         </li>
         <li>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
               Contact
            </ScrollLink>
         </li>
         <li>
            <ThemeToggleButton></ThemeToggleButton>
         </li>
      </>
   );

   const scrollToTop = () => {
      scroll.scrollToTop();
   };

   return (
      <div>
         <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 opacity-95">
            <div className="flex items-center text-gray-900">
               <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}
                  className="mr-4 block cursor-pointer py-1.5 text-xl font-extrabold leading-relaxed text-inherit antialiased"
               >
                  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">RIH</span>
               </ScrollLink>
               <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                  {navLinks}
               </ul>
               <button
                  className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  data-collapse-target="sticky-navar"
                  onClick={() => setOpenNav(!openNav)}
               >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                     {openNav ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           className="h-6 w-6"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     ) : (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        </svg>
                     )
                     }
                  </span>
               </button>
            </div>
            <Collapse open={openNav}>
               <div
                  className={openNav ? 'block' : 'hidden'}
               >
                  <ul className="mt-2 mb-4 flex flex-col gap-2 pb-1 text-black">
                     {navLinks}
                  </ul>
               </div>
            </Collapse>
         </nav>
      </div>
   );
};

export default Navbar;
