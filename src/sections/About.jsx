import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full flex flex-col items-center gap-12"
      >
        {/* About Me Section - Title remains centered */}
        <div className="text-center w-full">
          <h2 className="text-5xl font-bold italic mb-12 text-white">
            <span className="italic">Ab</span><span className="text-blue-500 italic">o</span><span className="italic">ut Me</span>
          </h2>
          
          {/* Content shifted to extreme left */}
          <div className="text-slate-300 text-lg w-full space-y-8 text-left">
            
            <p className="flex items-start gap-3">
              <span className="text-blue-500 font-bold text-xl mt-1">•</span>
              I am a passionate Web Developer and UI Designer dedicated to architecting digital experiences through clean code and bold, user-centric design.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-blue-500 font-bold text-xl mt-1">•</span>
              My professional journey is driven by a commitment to bridging the gap between vision and reality, leveraging my background in Computer Science from GNIOT Engineering to build high-performance, aesthetically driven web solutions.
            </p>

            <div className="space-y-2">
              <p className="flex items-start gap-3 font-bold text-white">
                <span className="text-blue-500 font-bold text-xl mt-1">•</span>
                Professional Journey & Vision
              </p>
              <p className="pl-8 text-slate-300">
                Beyond the technical foundation, I view every project as an opportunity to push the boundaries of what is possible on the web. My focus is not just on writing code, but on creating digital ecosystems that are scalable, accessible, and deeply engaging. I thrive on staying ahead of industry trends and integrating the latest technologies to ensure my work remains at the cutting edge.
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-start gap-3 font-bold text-white">
                <span className="text-blue-500 font-bold text-xl mt-1">•</span>
                Core Philosophy
              </p>
              <p className="pl-8 text-slate-300">
                I believe that the best digital products are born from the intersection of functional logic and emotive design. By prioritizing user empathy throughout the development lifecycle, I ensure that every interface I build feels intuitive and purposeful. My goal is to transform user needs into seamless experiences that drive engagement and tell a compelling story.
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-start gap-3 font-bold text-white">
                <span className="text-blue-500 font-bold text-xl mt-1">•</span>
                Commitment to Growth
              </p>
              <p className="pl-8 text-slate-300">
                I am constantly exploring new frameworks and methodologies, pushing myself to learn and adapt in a rapidly changing landscape. Whether I am architecting a custom UI component from scratch or optimizing performance for a seamless user journey, I am driven by a pursuit of excellence and a passion for crafting the future of the web.
              </p>
            </div>
          </div>
        </div>

        {/* My Approach Section - remains centered */}
        <div className="w-full text-center mt-12">
          <h3 className="text-3xl font-semibold mb-12">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-indigo-400/50 transition-all">
              <h4 className="text-xl font-bold mb-4">Strategy</h4>
              <p className="text-slate-400 text-sm">I create smart plans that turn user goals into a clear, step-by-step roadmap.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-indigo-400/50 transition-all">
              <h4 className="text-xl font-bold mb-4">Design</h4>
              <p className="text-slate-400 text-sm">I build beautiful, easy-to-use layouts that make visitors feel connected to the experience.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-indigo-400/50 transition-all">
              <h4 className="text-xl font-bold mb-4">Development</h4>
              <p className="text-slate-400 text-sm">I write clean, fast code to build websites that work perfectly and perform well.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;