import SmartFitnessTracker from "./Projects/smartFitnessTracker/smartFitnessTracker";


const Projects = () => {
   return (
      <div className="container mx-auto my-10">
         <h3 className="text-5xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">My Projects</h3>
         <div className="grid grid-cols-1 gap-5">
            <SmartFitnessTracker></SmartFitnessTracker>
         </div>
      </div>
   );
};

export default Projects;