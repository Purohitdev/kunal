import { useEffect } from 'react';
import CursorFollower from '../CursorFollower';
import Nav from '../Nav';
import CreativeSection from './CreativeSection';
import Hero from './Hero';
import VideoCarousel from './Video';
import HowItWorks from './How';
import VideoTypesSection from './Videotype';
import Footer from './Footer';
import Testimonials from './Test';
import ContactPage from './Contact';
import AboutMe from './About';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFEDE1] pt-5 relative ">
      <CursorFollower />
      <Nav />
      <Hero />
      <AboutMe/>
      <CreativeSection />
      <VideoCarousel />
      <HowItWorks/>
      <VideoTypesSection/>
      <Testimonials/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default Home;
