import { useEffect } from 'react';
import CursorFollower from '../CursorFollower';
import Nav from '../Nav';
import CreativeSection from './CreativeSection';
import Hero from './Hero';
import VideoCarousel from './Video';
import Footer from './Footer';
import Testimonials from './Test';
import ContactPage from './Contact';
import AboutMe from './About';
import FaqSection from './Faq';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFEDE1] pt-5 relative ">
      <CursorFollower />
      <Nav />
      <Hero />
      <AboutMe />
      <CreativeSection />
      <VideoCarousel />
      <Testimonials />
      <ContactPage />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default Home;
