import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "The guidance I received at Sriram's IAS was unparalleled. Their focus on conceptual clarity and answer writing strategy helped me clear the examination in my first attempt.",
    author: "Rahul Sharma",
    role: "IAS Officer, Batch 2022",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Mains test series and the detailed evaluation by faculty completely transformed my approach. The feedback was rigorous and pointed out exactly where I needed to improve.",
    author: "Priya Singh",
    role: "IPS Officer, Batch 2023",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Beyond just the syllabus, the classroom environment is inspiring. It's an institute that genuinely cares about its students and their mental well-being throughout the tough journey.",
    author: "Arjun Reddy",
    role: "IRS Officer, Batch 2021",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0a2540_2px,transparent_2px)] [background-size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm"
        >
          <Quote size={28} />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-16"
        >
          Student <span className="text-secondary">Experiences</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl md:text-3xl text-slate-700 font-medium font-heading leading-relaxed mb-10 text-center italic">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img src={testimonials[current].img} alt={testimonials[current].author} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm" />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-primary">{testimonials[current].author}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg border border-slate-100 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg border border-slate-100 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
