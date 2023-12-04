

const Skills = () => {
   return (
      <div>
         <div className="text-center lg:text-left">
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
                     className='text-xl md:text-3xl font-extrabold text-lime-400'
                  />
                  <div className="text-xl font">
                     <h2> <span className="font-bold">Mobile: </span> </h2>
                  </div>
                   </div>
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
   );
};

export default Skills;