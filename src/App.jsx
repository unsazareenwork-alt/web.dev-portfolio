import React from 'react';
import Home from './sections/Home';
import Navbar from './components/ui/Navbar';
import Skills from './sections/skills';
import About from './sections/About';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-black cursor-none overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;