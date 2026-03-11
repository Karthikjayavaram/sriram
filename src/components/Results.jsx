import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Quote, Award, Star, TrendingUp } from 'lucide-react';

const mockResults = [
  { 
    rank: 'AIR 1', year: '2023', name: 'Aditya Srivastava', exam: 'UPSC CSE',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "The personalized mentorship and structured approach at Sriram's IAS were instrumental in my journey to Rank 1."
  },
  { 
    rank: 'AIR 3', year: '2023', name: 'Donuru Ananya Reddy', exam: 'UPSC CSE',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "Focusing on conceptual clarity over rote learning made all the difference during the mains examination."
  },
  { 
    rank: 'AIR 5', year: '2023', name: 'Ruhani', exam: 'UPSC CSE',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "The consistent evaluation and feedback loop gave me the confidence to write stellar answers."
  },
  { 
    rank: 'AIR 9', year: '2023', name: 'Nausheen', exam: 'UPSC CSE',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "Sriram's IAS provided me with an environment of excellence that pushed me to achieve my best."
  },
];

const Results = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Subtle Background Glows to support glassmorphism without changing base color */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5aDQwTTM5IDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 rounded-full mb-6 border border-orange-200 shadow-sm"
          >
            <TrendingUp size={16} className="text-secondary" />
            <span className="text-sm font-bold text-orange-700 uppercase tracking-widest">Journey to Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight"
          >
            Celebrating Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Follow our top achievers roadmap. Witness their milestones and read the inspiring words that fueled their dedication towards the ultimate goal.
          </motion.p>
        </div>

        {/* Roadmap Timeline Container */}
        <div className="relative">
          {/* Connecting Line Base (Desktop: Center path, Mobile: Left path) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 flex transform md:-translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent rounded-full z-0"></div>
          
          {/* Animated drawing line overlay */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 transform md:-translate-x-1/2 bg-gradient-to-b from-accent to-secondary origin-top shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 rounded-full"
          ></motion.div>

          {/* Cards Container */}
          <div className="space-y-12 md:space-y-24 relative z-20">
            {mockResults.map((result, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node / Marker */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-30 top-12 md:top-1/2 md:-translate-y-1/2">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-8 h-8 rounded-full bg-white border-4 border-secondary shadow-[0_0_15px_rgba(255,107,0,0.4)] flex items-center justify-center relative"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                      
                      {/* Floating decorative star */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-6 -right-6 text-yellow-500 opacity-60 pointer-events-none"
                      >
                        <Star size={14} className="fill-current" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Glassmorphism Details Card */}
                  <div className={`w-full md:w-1/2 pl-24 pr-4 md:px-12 ${isEven ? 'md:text-right' : 'md:text-left'} relative z-10 py-4`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glassmorphism p-6 md:p-8 rounded-[2.5rem] border border-slate-100/60 shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] transition-all duration-300 relative group overflow-hidden bg-white/70"
                    >
                      {/* Internal Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>
                      <div className={`absolute top-0 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full pointer-events-none ${isEven ? 'right-0 -translate-y-1/2 translate-x-1/2' : 'left-0 -translate-y-1/2 -translate-x-1/2'}`}></div>

                      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start md:items-center xl:items-start text-center sm:text-left">
                        
                        {/* Avatar Wrapper */}
                        <div className={`flex-shrink-0 relative ${isEven ? 'sm:order-2 md:order-1 xl:order-2' : ''}`}>
                          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-to-br from-secondary via-orange-400 to-yellow-300 shadow-lg group-hover:shadow-xl transform group-hover:rotate-[5deg] transition-all duration-500 mx-auto sm:mx-0">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                              <img src={result.img} alt={result.name} className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-300" />
                            </div>
                          </div>
                          
                          {/* Rank Badge Floating */}
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-orange-500 text-white font-bold font-heading text-xs px-4 py-1.5 rounded-full shadow-md shadow-orange-500/30 border border-white/20 whitespace-nowrap flex items-center justify-center space-x-1 z-20">
                            <Award size={14} />
                            <span>{result.rank}</span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className={`flex-1 ${isEven ? 'sm:text-right md:text-left xl:text-right' : 'text-left'}`}>
                          <h3 className="text-2xl font-bold font-heading text-primary mb-1 mt-4 sm:mt-0 leading-tight">
                            {result.name}
                          </h3>
                          <div className={`flex items-center text-sm font-semibold text-slate-500 mb-4 justify-center sm:justify-start ${isEven ? 'sm:justify-end md:justify-start xl:justify-end' : ''}`}>
                            <span className="text-secondary">{result.exam}</span>
                            <span className="mx-2 w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{result.year}</span>
                          </div>
                          
                          {/* Quote Container */}
                          <div className="relative pt-2">
                            <Quote size={32} className={`absolute -top-4 ${isEven ? '-right-2 sm:-right-4 md:-left-4 xl:-right-4' : '-left-2 sm:-left-4 md:-left-6'} text-slate-100 -z-10 transform scale-150 opacity-80`} />
                            <p className={`text-slate-600 text-sm leading-relaxed font-medium italic relative z-10 ${isEven ? 'sm:text-right md:text-left xl:text-right' : 'text-center sm:text-left'}`}>
                              "{result.quote}"
                            </p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-20 relative z-20">
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-all duration-300"
          >
            Explore Complete Hall of Fame
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Results;
