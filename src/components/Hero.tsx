import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import CodeRain from './CodeRain';

export default function Hero() {
  return (
    <div className="relative bg-yellow-400 clip-diagonal overflow-hidden">
      <CodeRain />
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-black mb-8">
                <div className="typing-container">
                  <div className="text-3xl font-bold cyber-text text-black mb-4">Welcome to</div>
                  <div className="text-8xl font-black">
                    <div className="cyber-glitch inline-block" data-text="THACK">THACK</div>
                  </div>
                </div>
              </h1>
              <p className="text-black/80 text-lg mb-8 max-w-xl cyber-text">
                Join the most exciting hackathon of 2024. Build innovative solutions, 
                connect with fellow developers, and win amazing prizes.
              </p>
              <div className="flex items-center gap-4 date-text text-black">
                <Calendar className="w-6 h-6 text-black" />
                <span className="font-semibold">February 15-16, 2024</span>
              </div>
            </div>
            <div className="flex-1 relative" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-yellow-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}