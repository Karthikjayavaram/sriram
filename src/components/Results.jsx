import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const mockResults = [
  { rank: 'AIR 1', year: '2023', name: 'Aditya Srivastava', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { rank: 'AIR 3', year: '2023', name: 'Donuru Ananya Reddy', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { rank: 'AIR 5', year: '2023', name: 'Ruhani', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { rank: 'AIR 9', year: '2023', name: 'Nausheen', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const Results = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full mb-4">
              <Trophy size={16} className="text-yellow-600" />
              <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Hall of Fame</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 leading-tight"
            >
              Celebrating Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Successful Selections</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="hidden md:block bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-bold transition-all"
          >
            View All Results
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockResults.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-light rounded-[2rem] p-6 shadow-xl text-center group border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-br from-secondary to-yellow-400 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                    <img src={result.img} alt={result.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-primary mb-1">{result.name}</h3>
                
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="inline-block bg-primary text-white font-bold font-heading px-4 py-1.5 rounded-full text-lg shadow-md">
                  {result.rank}
                </div>
                <p className="text-slate-500 text-sm mt-3 font-medium">UPSC CSE {result.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold w-full transition-all">
            View All Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
