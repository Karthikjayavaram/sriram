import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Award } from 'lucide-react';
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
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}>
              <Award size={16} className="text-secondary" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide text-slate-200">NO.1 IAS COACHING INSTITUTE IN INDIA</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6"
          >
            Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400 drop-shadow-lg">Future</span><br />
            With the Best.
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
          >
            Join Sriram's IAS and embark on a journey mapped for success. We provide comprehensive guidance, elite faculty, and an environment curated for the top ranks.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(255,107,0,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-secondary to-orange-600 hover:from-orange-600 hover:to-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,107,0,0.5)] flex items-center justify-center group w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 text-white hover:text-secondary transition-colors group w-full sm:w-auto justify-center sm:justify-start"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all group-hover:scale-110"
              >
                <PlayCircle size={28} className="text-white group-hover:text-secondary" />
              </motion.div>
              <span className="font-semibold text-lg">Watch Video</span>
            </motion.button>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 1, delay: 1.2 }, y: { repeat: Infinity, duration: 2, delay: 1.2 } }}
      >
        <span className="text-white/70 text-xs mb-2 tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-secondary rounded-full"
          ></motion.div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
