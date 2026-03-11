import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award } from 'lucide-react';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const listItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[5/4] shadow-2xl group"
            >
              {/* Abstract structural gradient representing institution */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-indigo-900 z-0 group-hover:scale-105 transition-transform duration-700"></div>
              
              {/* Overlay architectural lines/grid for modern feel */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDE5aDIwTTE5IDB2MjAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-10"></div>
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                <div className="w-20 h-1 bg-secondary mb-4 rounded-full"></div>
                <h3 className="text-3xl font-heading font-bold mb-2">Legacy of Excellence</h3>
                <p className="text-white/80">Guiding aspirants since 1985</p>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-8 right-8 glassmorphism text-primary rounded-2xl p-4 shadow-xl flex items-center space-x-3 z-30"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold font-heading">38+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Exp.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">About Sriram's IAS</h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Empowering Minds, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Building The Nation.</span>
              </h2>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Founded by Prof. Srirangam, Sriram's IAS has been the beacon of quality coaching for the Civil Services Examination. We don't just teach the syllabus; we develop the analytical aptitude required for a civil servant.
              </p>

              {/* Staggered checklist */}
              <motion.div
                className="space-y-4 mb-10"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {[
                  'India\'s most trusted faculty for General Studies',
                  'Comprehensive study material curated by experts',
                  'Personalized mentorship and strict evaluation system',
                  'Consistently producing All India Rankers every year'
                ].map((item, idx) => (
                  <motion.div key={idx} variants={listItem} className="flex items-start group">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                      <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0 transition-transform" size={20} />
                    </motion.div>
                    <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex items-center space-x-6">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg"
                >
                  Read Our Story
                </motion.button>
                <div className="flex items-center text-slate-500 font-medium text-sm">
                  <Shield size={20} className="text-emerald-500 mr-2" /> 
                  ISO 9001:2015 Certified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
