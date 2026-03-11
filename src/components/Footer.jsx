import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import FooterScene from '../three/FooterScene';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-[#0d0a2e] text-white pb-4 relative overflow-hidden flex flex-col justify-end">
      {/* 3D Interactive Background */}
      <FooterScene />
      
      {/* Ambient static glows to anchor the corners */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none z-0"></div>

      {/* Foreground Content Container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-[95%] lg:w-[98%] mx-auto px-4 sm:px-6 relative z-10 pt-3 pb-2 mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 px-2 md:px-4">
          
          {/* Brand Col */}
          <motion.div variants={slideUp} className="space-y-4">
            <a href="#" className="flex flex-col inline-block group">
              <span className="text-3xl font-heading font-bold text-white tracking-tight flex items-center group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                SRIRAM'S <motion.span 
                  animate={{ color: ['#ff6b00', '#f97316', '#ff6b00'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-secondary ml-2 drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                >IAS</motion.span>
              </span>
              <span className="text-sm tracking-widest uppercase font-semibold text-slate-400 mt-1">
                Since 1985
              </span>
            </a>
            <p className="text-slate-300 leading-relaxed text-base pr-4">
              Empowering aspirants to achieve their IAS dreams with top-notch coaching, experienced faculty, and comprehensive study material since our inception.
            </p>
            <div className="flex space-x-4 pt-1">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all shadow-lg backdrop-blur-sm group"
                >
                  <Icon size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={slideUp}>
            <h4 className="text-xl font-bold mb-4 font-heading relative inline-block group text-white">
              Quick Links
              <motion.span 
                initial={{ width: "30%" }}
                whileHover={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              ></motion.span>
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Our Faculty', 'Success Stories', 'Current Affairs', 'Video Gallery', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="group text-slate-300 hover:text-white inline-flex items-center transition-all duration-300 text-base">
                    <ArrowRight size={16} className="mr-2 transform group-hover:translate-x-1 transition-transform text-accent opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0" /> 
                    <span className="transform group-hover:translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={slideUp}>
            <h4 className="text-xl font-bold mb-4 font-heading relative inline-block group text-white">
              Popular Courses
              <motion.span 
                initial={{ width: "30%" }}
                whileHover={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              ></motion.span>
            </h4>
            <ul className="space-y-2">
              {[
                'UPSC GS Foundation Course', 
                'Optional Subjects', 
                'CSAT Mentorship', 
                'Test Series Online/Offline', 
                'Interview Guidance'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="group text-slate-300 hover:text-white inline-flex items-center transition-all duration-300 text-base">
                    <ArrowRight size={16} className="mr-2 transform group-hover:translate-x-1 transition-transform text-accent opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0" /> 
                    <span className="transform group-hover:translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>



          {/* Contact Info */}
          <motion.div variants={slideUp}>
            <h4 className="text-xl font-bold mb-4 font-heading relative inline-block group text-white">
              Contact Us
              <motion.span 
                initial={{ width: "30%" }}
                whileHover={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-0.5 bg-secondary shadow-[0_0_8px_rgba(255,107,0,0.8)]"
              ></motion.span>
            </h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-start text-slate-300 text-base group cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <MapPin size={16} className="text-secondary" />
                </div>
                <span className="pt-0.5">11B, Bada Bazar Marg, Old Rajinder Nagar, New Delhi - 110060</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center text-slate-300 text-base group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <Phone size={16} className="text-secondary" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">+91 98765 43210</a>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center text-slate-300 text-base group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <Mail size={16} className="text-secondary" />
                </div>
                <a href="mailto:info@sriramsias.com" className="hover:text-white transition-colors block">info@sriramsias.com</a>
              </motion.li>
            </ul>
          </motion.div>

        </div>

        <motion.div 
          variants={slideUp}
          className="border-t border-white/10 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-8"
        >
          <p className="text-slate-400 text-base text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sriram's IAS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-base text-slate-400">
            <a href="#" className="hover:text-white transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-300 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-300 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Refund Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-300 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
