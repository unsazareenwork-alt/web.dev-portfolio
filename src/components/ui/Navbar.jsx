import React from 'react';
import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
      {/* Logo/Name */}
      <div className="text-white font-bold text-xl">
        UZ
      </div>

      {/* Navigation Links with Blue Hover Effect */}
      <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download="Unsa_Zareen_Resume.pdf"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
      >
        Resume <Download size={16} />
      </a>
    </nav>
  );
};

export default Navbar;