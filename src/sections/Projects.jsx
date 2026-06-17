import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      title: "Quizzer App", 
      desc: "An interactive learning experience featuring leaderboards and rewards.", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/unsazareenwork-alt/quizzer.git"
    },
    { 
      title: "Fast Budget Tracker", 
      desc: "A comprehensive financial overview for tracking income and spending.", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/unsazareenwork-alt/finance-manager.git"
    },
    { 
      title: "Photobooth Experience", 
      desc: "A fun and engaging online photo capture and sharing platform.", 
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/unsazareenwork-alt/cute-photoframe.git"
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-16">My Projects</h2>
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden p-8 rounded-[2rem] border border-white/10 hover:border-indigo-400/50 transition-all h-72"
          >
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${proj.image})`,
                filter: 'blur(8px)',
                transform: 'scale(1.1)'
              }}
            />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full">
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full mb-4 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
              >
                <Github size={24} color="white" />
              </a>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-slate-200 text-sm">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;