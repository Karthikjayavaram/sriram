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

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden bg-white shadow-sm">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        <span className={`text-lg font-heading font-semibold transition-colors ${isOpen ? 'text-secondary' : 'text-primary'}`}>{faq.q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-secondary/10 text-secondary' : 'text-slate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-light relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Got queries? We have answers.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              faq={faq} 
              isOpen={openIdx === idx} 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
