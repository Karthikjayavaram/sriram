import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 origin-top-right"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative glowing orb inside the box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-30 -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to claim your spot in <br className="hidden md:block"/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400">Civil Services?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Join the new batch starting this month. Secure your admission and get access to exclusive early-bird study materials and mentorship calls.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-500 hover:to-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all transform hover:scale-105 flex items-center justify-center w-full sm:w-auto">
                Apply for Admission <ArrowRight className="ml-2" />
              </button>
              
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center w-full sm:w-auto">
                <PhoneCall size={20} className="mr-2" /> Request Callback
              </button>
            </div>
            
            <p className="text-slate-400 text-sm mt-8">
              Still have doubts? Call us directly at <a href="tel:+919876543210" className="text-secondary font-bold hover:underline">+91 98765 43210</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
