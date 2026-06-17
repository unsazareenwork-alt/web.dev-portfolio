import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const verticalText = "C O N T A C T  M E   C O N T A C T  M E   C O N T A C T  M E";

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Vertical text on the extreme left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 z-20">
        {verticalText.split("").map((char, i) => (
          <span key={i} className="text-xs uppercase tracking-widest text-slate-500 font-light leading-none">
            {char === " " ? <br /> : char}
          </span>
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-16">Get In Touch</h2>
      
      <div className="max-w-xl w-full flex flex-col gap-6">
        {[
          { icon: Mail, title: "Email", value: "unsazareenwork@gmail.com", href: "mailto:unsazareenwork@gmail.com" },
          { icon: Phone, title: "Phone", value: "+91-9818751611" },
          { icon: MapPin, title: "Location", value: "New Delhi, India" }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-6 hover:border-indigo-500 transition-colors">
            <item.icon className="text-indigo-500 w-8 h-8" />
            <div>
              <h3 className="text-sm font-bold uppercase text-gray-500">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-lg hover:text-indigo-400 transition-colors">{item.value}</a>
              ) : (
                <p className="text-lg text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}

        
      </div>
    </section>
  );
};

export default Contact;