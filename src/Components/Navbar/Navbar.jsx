
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ThemeToggleButton from '../Theme/ThemeToggleButton';

const Navbar = () => {
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
      </>
   );

   const scrollToTop = () => {
      scroll.scrollToTop();
   };

   return (
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl ">
      <div className="navbar-start">
         <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
         </div>
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
               <h2 className="text-sm md:text-lg lg:text-2xl font-bold text-cyan-500 cursor-pointer" onClick={scrollToTop}>
                  RIH
               </h2>
            </ScrollLink>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navLinks}</ul>
         </div>
         <div className="navbar-end">
            <ThemeToggleButton />
         </div>
      </div>
   );
};

export default Navbar;
