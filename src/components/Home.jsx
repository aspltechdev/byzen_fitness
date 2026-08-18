import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Mission from "./mission";
import Features from "./Features";
import Services from "./Services";
import Whyus from "./Whyus";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Socialwall from "./Socialwall";
// import Trainerssection from "./Trainerssection";
import Cta from "./Cta";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <mission />
      <Whyus />
      <Services />
     
      <Features />
      <Gallery />

      <Socialwall />
      {/* <Trainerssection/> */}
      <Testimonials />

      <Cta />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;