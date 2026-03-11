import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const videos = [
  { 
    title: 'Demystifying the UPSC Syllabus', 
    thumb: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
    tag: 'Strategy' 
  },
  { 
    title: 'The Importance of Newspaper Reading', 
    thumb: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
    tag: 'Current Affairs' 
  },
  { 
    title: 'Answer Writing: The Art of Expression', 
    // Using the real YouTube playlist thumbnail via the provided video ID
    thumb: 'https://img.youtube.com/vi/KNIaRLrTIOU/hqdefault.jpg', 
    tag: 'Mains',
    url: 'https://www.youtube.com/watch?v=KNIaRLrTIOU&list=PLDnIeUIsbmQvj72zfnc9LWMLPJZcDCoWn'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const VideoGallery = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <div className="max-w-2xl">
            <motion.span 
              variants={fadeSlideUp}
              className="text-sm font-bold uppercase tracking-widest text-secondary mb-3 inline-block"
            >
              Watch & Learn
            </motion.span>
            <motion.h2 
              variants={fadeSlideUp}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 leading-tight"
            >
              Career Guidance & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Video Resources</span>
            </motion.h2>
          </div>
          <motion.button 
            variants={fadeSlideUp}
            whileHover={{ scale: 1.05, x: 5 }}
            className="hidden md:flex items-center space-x-2 text-secondary font-bold hover:text-orange-600 transition-colors"
          >
            <span>Subscribe to our Channel</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <PlayCircle size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Large Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl aspect-[16/9]"
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Main Video" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <motion.div 
                animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 0 0 rgba(255,107,0,0)', '0 0 0 12px rgba(255,107,0,0.2)', '0 0 0 0 rgba(255,107,0,0)'] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-secondary/80 transition-all duration-300"
              >
                <PlayCircle size={40} className="text-white ml-2" />
              </motion.div>
            </div>
            
            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-dark to-transparent">
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Masterclass</span>
              <h3 className="text-3xl font-bold font-heading text-white">How to Start UPSC Preparation from Scratch</h3>
            </div>
          </motion.div>

          {/* Smaller Videos List */}
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {videos.map((vid, idx) => (
              <motion.a 
                key={idx}
                href={vid.url || '#'}
                target={vid.url ? '_blank' : '_self'}
                rel="noopener noreferrer"
                variants={fadeSlideRight}
                whileHover={{ x: 6 }}
                className="group flex gap-4 cursor-pointer no-underline"
              >
                <div className="w-40 md:w-48 aspect-video rounded-xl overflow-hidden relative shadow-md flex-shrink-0">
                  <img 
                    src={vid.thumb} 
                    alt={vid.title} 
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1455390582262-044cdead2708?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: idx * 0.4 }}
                    >
                      <PlayCircle size={24} className="text-white opacity-90" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{vid.tag}</span>
                  <h4 className="text-lg font-bold font-heading text-primary group-hover:text-secondary transition-colors leading-tight line-clamp-2">{vid.title}</h4>
                </div>
              </motion.a>
            ))}
            
            <motion.button 
              variants={fadeSlideUp}
              whileHover={{ scale: 1.03 }}
              className="md:hidden mt-4 bg-slate-100 text-primary py-3 rounded-xl font-bold font-heading hover:bg-slate-200 transition-colors"
            >
              View More Videos
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
