import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Award, Users, BookOpen } from 'lucide-react';
import HeroScene from '../three/HeroScene';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-primary pt-20 pb-16">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-10 hidden md:block"></div>
      <div className="absolute inset-0 bg-primary/80 z-10 md:hidden"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-white lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
              <Award size={16} className="text-secondary" />
              <span className="text-sm font-semibold tracking-wide text-slate-200">NO.1 IAS COACHING INSTITUTE IN INDIA</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
              Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400 drop-shadow-lg">Future</span><br />
              With the Best.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Join Sriram's IAS and embark on a journey mapped for success. We provide comprehensive guidance, elite faculty, and an environment curated for the top ranks.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-gradient-to-r from-secondary to-orange-600 hover:from-orange-600 hover:to-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.5)] flex items-center justify-center group w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center space-x-3 text-white hover:text-secondary transition-colors group w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all group-hover:scale-110">
                  <PlayCircle size={28} className="text-white group-hover:text-secondary" />
                </div>
                <span className="font-semibold text-lg">Watch Video</span>
              </button>
            </div>
            
          </motion.div>
        </div>
        
        {/* The right side space for the 3D scene to breathe on desktop */}
        <div className="hidden md:block w-2/5 h-[500px]">
          {/* Invisible placeholder to maintain flex layout balance */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white/70 text-xs mb-2 tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary rounded-full"></div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
