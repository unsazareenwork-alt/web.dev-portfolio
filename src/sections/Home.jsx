import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AuroraBackground } from "../components/ui/aurora-background";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";

const titles = ["Unsa Zareen", "Web Developer", "UI Designer"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home">
      <AuroraBackground>
        
        {/* Social Icons - Fixed to extreme right with hover effects */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
          <a 
            href="https://github.com/unsazareenwork-alt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-indigo-400 hover:scale-125 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.instagram.com/unsa_zareen/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-indigo-400 hover:scale-125 transition-all duration-300"
          >
            <Instagram size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/unsa-zareen-4b63b530b" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-indigo-400 hover:scale-125 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center px-4 text-center"
        >
          {/* Internship Badge */}
          <div className="flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 bg-white text-sm">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-black font-semibold uppercase tracking-widest text-xs">Open for internships</span>
          </div>

          {/* Cycling Text */}
          <div className="h-24 md:h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-8xl font-black tracking-tighter text-white"
              >
                {titles[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-300 max-w-2xl mt-4">
            Transforming <span className="text-white font-semibold underline decoration-indigo-500">Complex</span> problems into elegant, React solutions.
            <br />
            Precision engineering meets <span className="text-white font-semibold italic">modern</span> design for a faster, smarter web.
          </p>

          {/* Feature List */}
          <div className="flex items-center gap-4 mt-8 text-slate-400 text-sm uppercase tracking-widest">
            <span>Fast Performance</span>
            <span>•</span>
            <span>Clean Architecture</span>
            <span>•</span>
            <span>Pixel Perfect</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-16 mt-10">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Home;