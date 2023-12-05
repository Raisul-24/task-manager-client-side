/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, [])
   return (
      <div>
         <h3 className="text-5xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">My Experience</h3>
         <div className="container mx-auto  text-center">
            <div className="my-3" data-aos="zoom-in-up" data-aos-duration='1000'>
               <h2 className="font-semibold">Student Prefect (Database Management System Course) </h2>
               <h2 className="font-medium">Daffodil International University </h2>
               <h2 className="font-medium">January,2023 - Continue</h2>
            </div>
            <div className="my-3" data-aos="zoom-in-up" data-aos-duration='1000'>
               <h2 className="font-semibold">Executive Member (IEEE DIU Student Branch) </h2>
               <h2 className="font-medium">Daffodil International University </h2>
               <h2 className="font-medium">August,2023 - Continue</h2>
            </div>
            <div className="my-3" data-aos="zoom-in-up" data-aos-duration='1000'>
               <h2 className="font-semibold">Executive Member (Research and Executive Wings) </h2>
               <h2 className="font-medium">Daffodil International University(CPC) </h2>
               <h2 className="font-medium">July 2022 – April 2023</h2>
            </div>
         </div>
      </div>
   );
};

export default Experience;