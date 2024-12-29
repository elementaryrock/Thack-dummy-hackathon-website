import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import AnimatedButton from './buttons/AnimatedButton';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 z-50 border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="logo-container">
            <div className="logo-icons cursor-pointer">
              <Cpu className="primary-icon w-8 h-8 text-yellow-400" />
              <Terminal className="secondary-icon w-6 h-6 text-yellow-400/70" />
            </div>
            <div className="logo-text">
              &lt;<span className="highlight">THACK</span>/&gt;
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#challenge" className="nav-link text-white hover:text-yellow-400 transition-colors">Challenge</a>
            <a href="#prizes" className="nav-link text-white hover:text-yellow-400 transition-colors">Prizes</a>
          </div>
          
          <AnimatedButton 
            variant="primary" 
            size="sm"
            className="hidden md:inline-flex"
          >
            Register Now
          </AnimatedButton>
        </div>
      </div>
    </nav>
  );
}