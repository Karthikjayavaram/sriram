import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Simple CSS-based particle background for the footer
const ParticleNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 4 + 1;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

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
    <footer ref={ref} className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Decor & Particles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <ParticleNetwork />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <motion.div variants={slideUp} className="space-y-6">
            <a href="#" className="flex flex-col inline-block group">
              <span className="text-3xl font-heading font-bold text-white tracking-tight flex items-center group-hover:text-slate-200 transition-colors">
                SRIRAM'S <motion.span 
                  animate={{ color: ['#ff6b00', '#f97316', '#ff6b00'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-secondary ml-2"
                >IAS</motion.span>
              </span>
              <span className="text-xs tracking-widest uppercase font-semibold text-slate-400">
                Since 1985
              </span>
            </a>
            <p className="text-slate-300 leading-relaxed text-sm">
              Empowering aspirants to achieve their IAS dreams with top-notch coaching, experienced faculty, and comprehensive study material since our inception.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-6 font-heading relative inline-block group">
              Quick Links
              <motion.span 
                initial={{ width: "50%" }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-0.5 bg-secondary -mb-2"
              ></motion.span>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Faculty', 'Success Stories', 'Current Affairs', 'Video Gallery', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="group text-slate-300 hover:text-secondary inline-flex items-center transition-all duration-300 text-sm">
                    <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-2 transition-transform text-secondary opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 delay-75" /> 
                    <span className="transform group-hover:translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-6 font-heading relative inline-block group">
              Popular Courses
              <motion.span 
                initial={{ width: "50%" }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-0.5 bg-secondary -mb-2"
              ></motion.span>
            </h4>
            <ul className="space-y-3">
              {[
                'UPSC GS Foundation Course', 
                'Optional Subjects', 
                'CSAT Mentorship', 
                'Test Series Online/Offline', 
                'Interview Guidance'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="group text-slate-300 hover:text-secondary inline-flex items-center transition-all duration-300 text-sm">
                    <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-2 transition-transform text-secondary opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 delay-75" /> 
                    <span className="transform group-hover:translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-6 font-heading relative inline-block group">
              Contact Us
              <motion.span 
                initial={{ width: "50%" }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-0.5 bg-secondary -mb-2"
              ></motion.span>
            </h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-start text-slate-300 text-sm cursor-default">
                <MapPin size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span>11B, Bada Bazar Marg, Old Rajinder Nagar, New Delhi - 110060</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center text-slate-300 text-sm">
                <Phone size={18} className="text-secondary mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="hover:text-white transition-colors block">+91 98765 43211</a>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center text-slate-300 text-sm">
                <Mail size={18} className="text-secondary mr-3 flex-shrink-0" />
                <a href="mailto:info@sriramsias.com" className="hover:text-white transition-colors">info@sriramsias.com</a>
              </motion.li>
            </ul>
          </motion.div>

        </div>

        <motion.div 
          variants={slideUp}
          className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sriram's IAS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all hover:after:w-full hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all hover:after:w-full hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary after:transition-all hover:after:w-full hover:text-white transition-colors">Refund Policy</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
