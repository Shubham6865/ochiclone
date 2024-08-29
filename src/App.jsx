
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Marquee from './components/Marquee/Marquee';
import About from './components/About/About';
import Eyes from './components/Eyes/Eyes';
import Featured from './components/Featured/Featured';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter } from 'react-router-dom';
import NewNavbar from './components/Navbar/NewNavbar';

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      // Locomotive Scroll options here
    });

    return () => scroll.destroy(); // Clean up on unmount
  }, []);

  return (
    <div className='w-full bg-[#F1F1F1] m-0 p-0 box-border'>
      <BrowserRouter>
        <NewNavbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />

      </BrowserRouter>


    </div>
  );
};

export default App;

