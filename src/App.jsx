import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Features from './components/Features';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Faculty from './components/Faculty';
import VideoGallery from './components/VideoGallery';
import CurrentAffairs from './components/CurrentAffairs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light font-sans text-slate-800 selection:bg-secondary/30">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Features />
      <Results />
      <Testimonials />
      <Faculty />
      <VideoGallery />
      <CurrentAffairs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
