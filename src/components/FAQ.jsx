import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Who can enroll in the General Studies Foundation Course?",
    a: "Our GS Foundation Course is designed for beginners as well as those who have already started their preparation. Any graduate or final year student aiming for the UPSC CSE can join."
  },
  {
    q: "Do you provide online classes?",
    a: "Yes, we offer both comprehensive offline offline classes at all our centers, and high-quality live-streamed online classes with interactive doubt clearing sessions."
  },
  {
    q: "Are the study materials updated continuously?",
    a: "Absolutely. Our dedicated research team ensures all study material, booklets, and class notes are continuously updated to reflect the latest dynamic changes in the UPSC syllabus and current affairs."
  },
  {
    q: "What is the duration of the GS Foundation Course?",
    a: "The standard duration is 10 to 11 months, which covers the entire syllabus for both Prelims and Mains, followed by an intensive Test Series and revision classes."
  },
  {
    q: "Is there any EMI or installment option for fees?",
    a: "Yes, we provide flexible installment payment options. Please get in touch with our admissions desk to understand the current financial plans available."
  }
];

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="border border-slate-200 rounded-2xl mb-4 overflow-hidden bg-white shadow-sm"
    >
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        <span className={`text-lg font-heading font-semibold transition-colors ${isOpen ? 'text-secondary' : 'text-primary'}`}>{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 flex-shrink-0 ${isOpen ? 'bg-secondary/10 text-secondary' : 'text-slate-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-light relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-widest text-secondary mb-3 inline-block"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-slate-500 text-lg"
          >
            Got queries? We have answers.
          </motion.p>
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              faq={faq} 
              index={idx}
              isOpen={openIdx === idx} 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
