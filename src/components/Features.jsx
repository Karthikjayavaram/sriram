import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Compass, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: 'Expert Faculty',
    description: 'Learn from India\'s top educators and subject matter experts with decades of UPSC experience.',
    bg: 'from-blue-500/20 to-indigo-500/10',
    border: 'hover:border-blue-500/50'
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-orange-400" />,
    title: 'Updated Material',
    description: 'Comprehensive, structured, and strictly syllabus-oriented study material updated annually.',
    bg: 'from-orange-500/20 to-rose-500/10',
    border: 'hover:border-orange-500/50'
  },
  {
    id: 3,
    icon: <Compass className="w-8 h-8 text-teal-400" />,
    title: 'Personalized Mentorship',
    description: 'One-on-one guidance sessions to track progress, resolve doubts, and refine strategy.',
    bg: 'from-teal-500/20 to-emerald-500/10',
    border: 'hover:border-teal-500/50'
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
    title: 'Proven Track Record',
    description: 'Consistent high selection rate in UPSC CSE, producing top rankers year after year.',
    bg: 'from-indigo-500/20 to-purple-500/10',
    border: 'hover:border-indigo-500/50'
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0f1c] text-white">
      {/* Abstract Futuristic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>
      
      {/* Subtle dotted matrix overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0"></div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: i % 2 === 0 ? '#3b82f6' : '#ff6b00',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(59,130,246,0.8)' : 'rgba(255,107,0,0.8)'}`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 xl:gap-16">
          
          {/* Text Content Area (Left side on desktop) */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-lg shadow-black/50"
            >
              <Zap size={16} className="text-secondary fill-current" />
              <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">The Sriram's Edge</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-extrabold mb-6 leading-tight"
            >
              Why Choose <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-secondary drop-shadow-sm">
                Sriram's IAS?
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              We don't just cover the syllabus; we engineer an administrative mindset. Our futuristic learning methodologies and elite panel of experts give you the absolute advantage in the UPSC battlefield.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <button className="bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] flex items-center justify-center mx-auto lg:mx-0 group w-full sm:w-auto">
                Discover Our Approach
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* 2x2 Glassmorphism Grid Area (Right side on desktop) */}
          <div className="w-full lg:w-7/12 relative mt-10 lg:mt-0">
            
            {/* Ambient Background Glow behind the cards */}
            <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
                  whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: -2 }}
                  className={`bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 relative group overflow-hidden flex flex-col items-start ${feature.border}`}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  {/* Subtle Gradient Overlay on Hover for inner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none`}></div>
                  
                  {/* Corner Accent Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors z-0 pointer-events-none"></div>

                  <div className="relative z-10 w-full">
                    {/* Icon Container with 3D effect */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center mb-6 shadow-inner transform group-hover:translate-z-[20px] transition-transform duration-300 relative overflow-hidden">
                      {/* Icon inner shine */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      <motion.div>
                        {feature.icon}
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all transform group-hover:translate-z-[10px]">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors transform group-hover:translate-z-[5px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
