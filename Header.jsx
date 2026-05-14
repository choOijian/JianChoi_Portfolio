import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 px-8 py-6 border-b border-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-tight">
          <a href="/" className="hover:opacity-60 transition-opacity">
            Jian Choi.
          </a>
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-10 text-sm font-medium">
            <li>
              <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
