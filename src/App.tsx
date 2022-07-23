
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Skills from './components/Skills';
import './index.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swiper.css'
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      {/* <Qualification /> */}
      <Services />
      <Portfolio />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
