import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    date: '10 March 2026',
    category: 'Economy',
    title: 'RBI Guidelines on Digital Lending: Impact and Analysis',
    excerpt: 'An in-depth look at the revised guidelines issued by the Reserve Bank of India regarding digital lending platforms...'
  },
  {
    date: '08 March 2026',
    category: 'International Relations',
    title: 'G20 Summit Outcomes and India\'s Strategic Position',
    excerpt: 'Analyzing the key takeaways from the recent summit and how India navigated the geopolitical shifts...'
  },
  {
    date: '05 March 2026',
    category: 'Environment',
    title: 'New Climate Accords: Challenges for Developing Nations',
    excerpt: 'Evaluating the funding gap and technology transfer issues highlighted in the latest climate convention...'
  }
];

const CurrentAffairs = () => {
  return (
    <section className="py-24 bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Current Affairs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Stay updated with expert analysis of daily news, specifically curated for UPSC CSE relevance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 group flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-blue-50 text-accent text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                <span className="flex items-center text-slate-400 text-xs font-medium">
                  <Calendar size={12} className="mr-1" /> {article.date}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              
              <p className="text-slate-500 mb-8 flex-grow">
                {article.excerpt}
              </p>
              
              <a href="#" className="flex items-center text-secondary font-bold group-hover:text-orange-600 transition-colors mt-auto">
                Read Full Analysis <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
            Browse Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentAffairs;
