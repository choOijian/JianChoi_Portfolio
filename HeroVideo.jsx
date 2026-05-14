import React from 'react';

const HeroVideo = () => {
  return (
    <section className="w-[90%] mx-auto mb-20">
      <a 
        href="https://youtu.be/O1Ip8GTIgpI" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full aspect-video rounded-lg overflow-hidden bg-[#F9F9F9] relative group cursor-pointer border border-gray-100 transition-transform duration-300 hover:scale-[1.01]"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
          <span className="text-xl font-bold text-gray-800 tracking-wide uppercase">Click to Watch Showreel</span>
        </div>
      </a>
    </section>
  );
};

export default HeroVideo;
