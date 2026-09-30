import About from "./components/About";
import Blog from "./components/Blog";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Process />
      <Portfolio />
      <Plan />
      <Testimonials />
      <Blog />
      <Brands />
      <Footer/>
    </>
  );
};

export default App;
