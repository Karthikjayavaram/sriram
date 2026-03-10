import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Compass, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Expert Faculty',
    description: 'Learn from India\'s top educators and subject matter experts with decades of UPSC experience.',
    bg: 'bg-blue-500'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: 'Updated Material',
    description: 'Comprehensive, structured, and strictly syllabus-oriented study material updated annually.',
    bg: 'bg-orange-500'
  },
  {
    icon: <Compass className="w-8 h-8 text-white" />,
    title: 'Personalized Mentorship',
    description: 'One-on-one guidance sessions to track progress, resolve doubts, and refine strategy.',
    bg: 'bg-teal-500'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: 'Proven Track Record',
    description: 'Consistent high selection rate in UPSC CSE, producing top rankers year after year.',
    bg: 'bg-indigo-500'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px] opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Why Choose <span className="text-secondary">Sriram's IAS?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Our methodology is designed not just to cover the syllabus, but to build an administrative mindset.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="dark-glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
