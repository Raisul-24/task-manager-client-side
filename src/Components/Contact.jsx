// import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
   return (
      <div className="hero min-h-[500px] rounded-xl mb-16 md:mb-2 ">
         <div className="hero-content flex flex-col md:flex-row-reverse md:justify-center w-full">
            <div className="text-center lg:text-left w-full md:w-1/2">
               <h2 className="text-5xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Contact</h2>
               <TypeAnimation
                  sequence={[
                     "Let's connect! 🤔",
                     1000,
                     "Connect with me! ✨",
                     1000,
                     "Let's turn ideas into realities. 🚀",
                     1000,
                     "Connect and let's geek out. 😎",
                     1000,
                     "Connect, and let's make it epic. 💥",
                     1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className='text-lg md:text-3xl font-extrabold text-lime-400'
               />
               <h2 className="font-semibold mt-4">Contact Information</h2>
               <div className="font-normal">
                  <h2 className="flex"> <span className="font-medium"> <div className="flex gap-x-1 items-center"><FaPhoneAlt /> Mobile: </div> </span> +880  01521-706432 <br /> or, 01797-922486 </h2>
                  <h2 className="flex"> <span className="font-medium"> <div className="flex gap-x-1 items-center"><FaEnvelope /> Email: </div> </span> islamraisul2001@gmail.com </h2>
                  <h2 className="flex"> <span className="font-medium "> <div className="flex gap-x-1 items-center"><FaGithub /> Github: </div> </span> <a href="https://github.com/Raisul-24">Raisul-24</a> </h2>
               </div>
               <h2 className="font-semibold mt-4 mb-2">Social Links:</h2>
               <div className="text-3xl flex gap-x-3">
                  <p className="text-white bg-black rounded-full"><a href="https://github.com/Raisul-24"><FaGithub /></a></p>
                  <p className="text-sky-600 bg-white rounded-full"><a href="https://www.linkedin.com/in/raisul~islam"><FaLinkedin /></a></p>
                  <p className="rounded-full"><a href="https://twitter.com/raisul_24"><FaXTwitter /></a></p>
                  <p className="text-white bg-blue-600 rounded-full"><a href="https://www.facebook.com/raisul.rih"><FaFacebook /></a></p>
                  
               </div>
            </div>
            <div className="w-full md:w-1/2 m-0 p-0">
            <div className="card shrink-0 max-w-sm shadow-2xl bg-lime-100">
               <form
                  // onSubmit={handleSubmit(onSubmit)} 
                  className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text"
                        placeholder="Enter your name...."
                        // {...register("name", { required: true })}
                        className="input input-bordered bg-white" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email"
                        // {...register("email", {required: true})}
                        placeholder="Enter your email...." className="input input-bordered bg-white" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Message</span>
                     </label>
                     <textarea
                        // {...register("email", {required: true})}
                        placeholder="Enter your message...." className="textarea-lg textarea-bordered rounded-lg bg-white pt-1" />
                  </div>

                  <div className="form-control mt-6">
                     <input type="submit" value='Send' className="btn btn-sm btn-outline btn-info" />
                  </div>
               </form>
            </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;