import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const videos = [
  { title: 'Demystifying the UPSC Syllabus', thumb: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Strategy' },
  { title: 'The Importance of Newspaper Reading', thumb: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Current Affairs' },
  { title: 'Answer Writing: The Art of Expression', thumb: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Mains' }
];

const VideoGallery = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 leading-tight"
            >
              Career Guidance & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Video Resources</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="hidden md:flex items-center space-x-2 text-secondary font-bold hover:text-orange-600 transition-colors"
          >
            <span>Subscribe to our Channel</span>
            <PlayCircle size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Large Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl aspect-[16/9]"
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-[...]-TODO?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Main Video" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-secondary/80 transition-all duration-300">
                <PlayCircle size={40} className="text-white ml-2" />
              </div>
            </div>
            
            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-dark to-transparent">
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Masterclass</span>
              <h3 className="text-3xl font-bold font-heading text-white">How to Start UPS Preparation from Scratch</h3>
            </div>
          </motion.div>

          {/* Smaller Videos List */}
          <div className="flex flex-col gap-6">
            {videos.map((vid, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-4 cursor-pointer"
              >
                <div className="w-40 md:w-48 aspect-video rounded-xl overflow-hidden relative shadow-md flex-shrink-0">
                  <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <PlayCircle size={24} className="text-white opacity-80" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{vid.tag}</span>
                  <h4 className="text-lg font-bold font-heading text-primary group-hover:text-secondary transition-colors leading-tight line-clamp-2">{vid.title}</h4>
                </div>
              </motion.div>
            ))}
            
            <motion.button 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:hidden mt-4 bg-slate-100 text-primary py-3 rounded-xl font-bold font-heading hover:bg-slate-200 transition-colors"
            >
              View More Videos
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
