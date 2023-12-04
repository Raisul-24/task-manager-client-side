import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";


const Home = () => {
   return (
      <div className="pt-20">
         <section id="home">
           <Banner></Banner>
         </section>
         <section id="about">
            <About></About>
            </section>
         <section id="contact">
            <Contact></Contact>
         </section>
         <section id="about"></section>

      </div>
   );
};

export default Home;