import React from 'react';

export default function PrizeBanner() {
  return (
    <div className="bg-yellow-400 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">PRIZES</h2>
          <div className="flex items-center justify-center">
            <h3 className="text-6xl md:text-8xl font-black text-black">WORTH</h3>
            <div className="relative ml-4">
              <img 
                src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80" 
                alt="Money stack" 
                className="w-32 h-32 object-cover rounded-lg shadow-xl transform -rotate-12"
              />
            </div>
            <h3 className="text-6xl md:text-8xl font-black text-black ml-4">10,00,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
}