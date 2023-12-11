
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SmartFitnessTracker from "./Projects/smartFitnessTracker/SmartFitnessTracker";
import SkillFusionHub from "./Projects/SkillFusionHub/SkillFusionHub";
import FutureTechHaven from "./Projects/FutureTechHaven/FutureTechHaven";

const Projects = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, [])
   return (
      <div className="container mx-auto my-10">
         <h3 className="text-5xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">My Projects</h3>
         <div className="" data-aos="zoom-in-up" data-aos-duration='1000'>
            <SmartFitnessTracker></SmartFitnessTracker>
         </div>
         <div className="my-10" data-aos="zoom-in-up" data-aos-duration='1000'>
            <SkillFusionHub></SkillFusionHub>
         </div>
         <div className="" data-aos="zoom-in-down" data-aos-duration='1000'>
            <FutureTechHaven></FutureTechHaven>
         </div>


      </div>
   );
};

export default Projects;