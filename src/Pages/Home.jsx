import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Home = () => {
   return (
      <div className="pt-20">
         <section id="home">
            <Banner></Banner>
         </section>
         <section id="about">
            <About></About>
         </section>
         <section id="experience">
            <Experience></Experience>
         </section>
         <section id="projects">
            <Projects></Projects>
         </section>
         <section id="skills">
            <Skills></Skills>
         </section>
         <section id="contact">
            <Contact></Contact>
         </section>
      </div>
   );
};

export default Home;