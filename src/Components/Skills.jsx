import { useState } from "react";
import bootstrap from '/images/icon/bootstrap.jpeg';
import tailwind from '/images/icon/tailwind.png';
import daisyui from '/images/icon/daisyui.png';
import html from '/images/icon/html.png';
import css from '/images/icon/css.png';
import js from '/images/icon/js.jpeg';
import js1 from '/images/icon/js.png';
import mongodb from '/images/icon/mongo.png';
import mui from '/images/icon/mui.jpeg';
import node from '/images/icon/nodejs.png';
import react from '/images/icon/react.gif';
import c from '/images/icon/c.png';
import express from '/images/icon/express.png';
import java from '/images/icon/java.png';
import php from '/images/icon/php.png';
import python from '/images/icon/python.jpeg';

const Skills = () => {
   const [skills, setSkills] = useState([]);
   fetch('skill.json')
      .then(res => res.json())
      .then(data => {
         setSkills(data);
      })
   console.log(skills)
   return (
      <div className="my-24 container mx-auto">
         <h2 className="text-5xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">My Skills</h2>
         <p className=" text-center">I have more than 1 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                  {/* <img src="/public/images/icon/bootstrap.jpeg" alt="" />       */}
         <div className="flex flex-col md:flex-row w-full justify-center items-center md:gap-20 my-7">
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
               <img src={html} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={css} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={tailwind} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={bootstrap} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={mui} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={daisyui} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={js1} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={js} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={react} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={node} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={express} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={mongodb} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={c} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={java} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={python} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               <img src={php} className="w-24 h-24 rounded-xl shadow-xl border-lime-200 border-2 p-2" alt="" />
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="w-full md:m-4 p-2 bg-lime-50 text-black flex items-center justify-around px-5 rounded-xl">
                  <h2 className="text-xl font-bold">Teamwork</h2>
                  <div className="radial-progress bg-success text-primary-content border-4 border-success" style={{"--value":90}} role="progressbar">90%</div>
               </div>
               <div className="w-full md:m-4 p-2 bg-lime-50 text-black flex items-center justify-around px-5 rounded-xl">
               <h2 className="text-xl font-bold">Communication</h2>
                  <div className="radial-progress bg-success text-primary-content border-4 border-success" style={{"--value":80}} role="progressbar">80%</div>
               </div>
               <div className="w-full md:m-4 p-2 bg-lime-50 text-black flex items-center justify-around px-5 rounded-xl">
               <h2 className="text-xl font-bold">Flexibility</h2>
            <div className="radial-progress bg-success text-primary-content border-4 border-success" style={{"--value":85}} role="progressbar">85%</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;