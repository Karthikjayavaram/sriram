import React from 'react';
import { motion } from 'framer-motion';

const faculty = [
  {
    name: 'Prof. Srirangam',
    subject: 'Indian Economy & Polity',
    exp: '35+ Years Experience',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dr. R.K. Singh',
    subject: 'History & Art',
    exp: '20+ Years Experience',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Anjali Sharma',
    subject: 'Geography & Environment',
    exp: '15+ Years Experience',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Vikram Das',
    subject: 'Science & Tech',
    exp: '12+ Years Experience',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Faculty = () => {
  return (
    <section id="faculty" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-widest text-secondary mb-3 inline-block"
          >
            Expert Educators
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Learn from the <span className="text-secondary">Masters</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Our faculty consists of renowned academicians, ex-bureaucrats, and subject matter experts dedicated to your success.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faculty.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -12, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
              className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(255,107,0,0.15), transparent)' }}
              />
              
              <div className="absolute bottom-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-1 bg-secondary mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold font-heading mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-2">{member.subject}</p>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{member.exp}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;
