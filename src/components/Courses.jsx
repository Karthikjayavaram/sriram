import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Clock, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'UPSC GS Foundation (Prelims+Mains)',
    duration: '10 Months',
    mode: 'Offline / Online',
    rating: '4.9',
    icon: <Target className="w-8 h-8 text-secondary" />,
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'group-hover:border-blue-500/30'
  },
  {
    id: 2,
    title: 'Optional Subjects Core Program',
    duration: '5 Months',
    mode: 'Offline / Online',
    rating: '4.8',
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    color: 'from-orange-500/20 to-red-500/20',
    border: 'group-hover:border-orange-500/30'
  },
  {
    id: 3,
    title: 'CSAT Comprehensive Module',
    duration: '3 Months',
    mode: 'Online Live',
    rating: '4.7',
    icon: <Clock className="w-8 h-8 text-teal-500" />,
    color: 'from-teal-500/20 to-emerald-500/20',
    border: 'group-hover:border-teal-500/30'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-light relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Learning Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Meticulously designed courses to navigate the complex UPSC syllabus with clarity, direction, and expert mentorship.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden flex flex-col h-full ${course.border}`}
            >
              {/* Background gradient blur on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-primary mb-3 leading-tight group-hover:text-black transition-colors">{course.title}</h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center bg-slate-50 px-3 py-1 rounded-full text-xs font-semibold text-slate-600">
                    <Clock size={12} className="mr-1" /> {course.duration}
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-600 text-yellow-500 font-medium">
                    <Star size={14} className="mr-1 fill-current" /> {course.rating}
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm mb-8 flex-grow">
                  Comprehensive coverage of the syllabus with regular tests, dedicated mentorship, and updated study materials.
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-sm font-semibold text-primary">{course.mode}</span>
                  <a href="#" className="flex items-center text-secondary font-semibold group-hover:text-orange-600 transition-colors">
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
