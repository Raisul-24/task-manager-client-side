import { FaFeather } from "react-icons/fa6";
import Img1 from "/projects/ToDoTask1.png";
import Img5 from "/projects/ToDoTask2.png";
import Img4 from "/projects/ToDoTask3.png";
import Img3 from "/projects/ToDoTask4.png";
import Img2 from "/projects/ToDoTask5.png";
import Img6 from "/projects/ToDoTask6.png";

const ToDoTaskManagement = () => {
   return (
      <div>
         <div className="relative flex flex-col md:flex-row-reverse bg-clip-border border-4 border-lime-400 rounded-xl bg-white text-gray-700 shadow-md w-full">
            <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
               <div className="carousel w-full">
                  <div id="item19" className="carousel-item w-full">
                     <img src={Img1} className="w-full" />
                  </div>
                  <div id="item20" className="carousel-item w-full">
                     <img src={Img2} className="w-full" />
                  </div>
                  <div id="item21" className="carousel-item w-full">
                     <img src={Img3} className="w-full" />
                  </div>
                  <div id="item22" className="carousel-item w-full">
                     <img src={Img4} className="w-full" />
                  </div>
                  <div id="item23" className="carousel-item w-full">
                     <img src={Img5} className="w-full" />
                  </div>
                  <div id="item24" className="carousel-item w-full">
                     <img src={Img6} className="w-full" />
                  </div>
               </div>
               <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item19" className="btn btn-xs">1</a>
                  <a href="#item20" className="btn btn-xs">2</a>
                  <a href="#item21" className="btn btn-xs">3</a>
                  <a href="#item22" className="btn btn-xs">4</a>
                  <a href="#item23" className="btn btn-xs">5</a>
                  <a href="#item24" className="btn btn-xs">6</a>
               </div>

            </div>

            <div className="p-1 md:p-2 lg:p-6">
               <h6
                  className="block mb-4  antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  SCC Technovision
               </h6>
               <h4 className="block mb-2  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Full Stack Website || User
               </h4>
               <ul>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> This is a full-stack todo task management system web application designed with responsive.</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> Users need to login via Google, Github (also can create a new Account).</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> Have an User, User can add task, darg and drop the task and updated the server.</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" />
                     <p> <span className="font-semibold">Technology:</span> React.js, Express.js, MongoDB, Node.js, Firebase Authentication, <br />
                        Transtack Query, React drag & drop components, React-hooks and more.....</p></li>
               </ul>
               <div className="flex gap-4">
                  <a href="https://ssc-technovision-inc.netlify.app" className="inline-block"><button
                     className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Live Link<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                     </svg></button></a>
                  <a href="https://github.com/Raisul-24/task-manager-client-side" className="inline-block"><button
                     className="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Client Side</button></a>
                  <a href="https://github.com/Raisul-24/task-manager-server-side" className="inline-block"><button
                     className="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Server Side</button></a>
               </div>
            </div>

         </div>
      </div>
   );
};

export default ToDoTaskManagement;