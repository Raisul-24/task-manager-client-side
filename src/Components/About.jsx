/* eslint-disable react/no-unescaped-entities */
import person from "/public/images/self.jpeg"
import web from "/public/images/web.gif"
const About = () => {
   return (
      <div className="hero min-h-screen my-10 flex">
         <div className="w-6 md:w-16">
            <img src="/images/developer.png" alt="" className="text-amber-50" />
         </div>
         <div className="flex-1">
            <div className="hero-content flex-col lg:flex-row-reverse mb-10 md:mb-0 ">

               <div className="lg:w-[500px] ">
                  <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold">About Me</h1>
                  <p className="py-6">I am a computer science student at Daffodil International University. My academic journey has provided me with a solid foundation in computer science and programming, and I'm excited to apply my knowledge in a real-world setting. I am passionate about web development</p>
                  <p className="pb-6">As a passionate web developer with a strong foundation in MERN technologies, including HTML, CSS JavaScript, React.Js, Express.Js, Jwt, Node.js, Google Firebase, MongoDB, Payment-Gateways, I have successfully designed and developed interactive and visually appealing websites. My experience and skills in creating responsive, user-friendly web interfaces have equipped me with the ability to craft compelling user experiences. I believe that learning and mastering these technologies will enable me to create more dynamic and feature-rich web applications.</p>
                  <p>The goal is to gain a challenging but rewarding career with an organization that provides opportunity for personal and professional growth.</p>
                        <p className="font-bold pb-6">Thanks a lot! ....❤️</p>
                  <div>
                     <button className="btn btn-sm btn-outline btn-success">
                        <a href="https://drive.google.com/file/d/1vyZr2Nhwzdq0kwNWZG0djV8GItLmO2TE/view?usp=sharing">See My CV</a></button>
                        
                  </div>
               </div>
               <div className="lg:w-1/2 relative md:mr-10">
                  <img src={person} className="skeleton w-4/5 rounded-xl shadow-2xl h-[460px] mr-20" />
                  <img src={web} className="skeleton w-2/5 rounded-xl shadow-2xl absolute top-2/3 right-2 h-60 border-8 border-white" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;