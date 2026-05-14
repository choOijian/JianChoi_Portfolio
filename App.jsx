import React, { useState } from 'react';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';

const projects = [
  { category: "Film", title: "The Last Piece Day" },
  { category: "Motion", title: "The Last Piece Day Campaign" },
  { category: "Branding", title: "Mumchit: Perfume Rebranding" },
  { category: "Etc", title: "PROJECT : 보이지 않게 설계된 일상" }
];

const categories = ["All", "Film", "Motion", "Branding", "Etc."];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-40 px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="mb-24 pb-20 border-b border-gray-100">
          <h1 className="text-6xl font-bold tracking-tighter leading-tight mb-4">
            Hi, I'm Jian.
          </h1>
          <p className="text-3xl font-light text-gray-800 tracking-tight mb-16">
            I'm a Visual & Video Designer.
          </p>

          {/* Hero Video */}
          <HeroVideo />
        </section>

        {/* Work Section */}
        <section id="work" className="mb-32">
          {/* Categories */}
          <div className="mb-12">
            <ul className="flex space-x-8 text-sm font-medium text-gray-500">
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`pb-1 transition-colors ${activeCategory === cat ? 'text-black border-b border-black' : 'hover:text-black'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project List (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Visual Placeholder */}
                <div className="w-full aspect-video bg-[#F9F9F9] flex items-center justify-center mb-5 transition-transform group-hover:scale-[1.01] duration-300">
                  <span className="text-[11px] text-gray-300 uppercase tracking-[0.2em]">Project Visualization</span>
                </div>
                {/* Project Info */}
                <div>
                  <h3 className="text-base font-medium">
                    <span className="text-gray-500 mr-2">[{project.category}]</span> 
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm text-gray-500">
          <span>© 2025 Jian. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
