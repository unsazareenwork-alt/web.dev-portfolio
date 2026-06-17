import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Core Skills", items: ["UI/UX Design", "Responsive Design", "Problem Solving", "Wireframing"] },
  { title: "Frontend Tech", items: ["React.js", "JavaScript", "Tailwind CSS", "Node.js"] },
  { title: "Design Tools", items: ["Figma", "Word Press", "Photoshop", "Illustrator"] },
  { title: "Tools & Interaction", items: ["Git", "GitHub", "Netlify", "Framer Motion"] },
];

const Skills = () => {
  const verticalText = "CREATING GREAT FRONTEND DESIGNS";

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Vertical text on the extreme left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 z-20">
        {verticalText.split("").map((char, i) => (
          <span key={i} className="text-xs uppercase tracking-widest text-slate-500 font-light">
            {char === " " ? <br /> : char}
          </span>
        ))}
      </div>

      {/* Decorative SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
        <path d="M 25% 60% Q 37.5% 40% 50% 60% T 75% 60%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        <path d="M 12.5% 70% Q 25% 85% 37.5% 70% T 62.5% 70% T 87.5% 70%" stroke="rgba(79,70,229,0.2)" strokeWidth="2" fill="none" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full flex flex-col items-center z-10"
      >
        <h2 className="text-5xl font-bold mb-4">Skills</h2>
        <p className="text-slate-400 text-xl mb-24 italic">Crafting seamless, high-performance interfaces where aesthetics meet functionality.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {skillCategories.map((cat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 relative"
            >
              <h3 className="text-lg font-semibold mb-6">{cat.title}</h3>
              <div className="flex flex-col gap-3 w-full">
                {cat.items.map((skill) => (
                  <button 
                    key={skill}
                    className="bg-white/5 px-4 py-2 rounded-full border border-white/5 text-sm hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-colors"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;