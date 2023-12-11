import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
   const handleDownload = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://drive.google.com/uc?export=download&id=1c0FQJ1on1FanX7JVXwtulPH5Hzvvv4XW';
      downloadLink.download = 'Raisul_Resume.pdf';
      downloadLink.target = '_blank'; // Open in a new tab (optional)
      downloadLink.click();
   };
   return (
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-0 ">
         <div className="w-full md:w-1/2 md:pl-10">
            <h3 className="text-lg md:text-4xl font-extrabold my-3">Hi There, I am</h3>
            <h1 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Raisul Islam Hridoy</h1>
            <TypeAnimation
               sequence={[
                  'Front-end Web Developer_',
                  1000,
                  'MERN Stack Developer_',
                  1000,
                  'Web Developer_',
                  1000,
                  'React.js Developer_',
                  1000,
                  'JavaScript Developer_',
                  1000,
                  'Next.js Developer_',
                  1000
               ]}
               wrapper="span"
               speed={50}
               repeat={Infinity}
               className='text-xl md:text-5xl font-extrabold text-amber-700'
            />
            <div>
               <button className="btn btn-sm btn-outline btn-info mt-9" onClick={handleDownload}>
                  Download My Resume
               </button>
            </div>
         </div>
         <div className="w-full md:w-1/2 bg-[url('/images/header_bg.png')] bg-no-repeat flex justify-end">
            <img src="images/ss.png" alt="" className="w-96"></img>
         </div>

      </div>
   );
};

export default Banner;