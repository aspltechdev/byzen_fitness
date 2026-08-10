import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Services from "./Services";
import Whyus from "./Whyus";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
// import Cta from "./Cta";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Whyus />
      <Gallery />
      <Testimonials />
      {/* <Cta /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;