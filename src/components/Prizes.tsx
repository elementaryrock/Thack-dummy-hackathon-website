import React from 'react';
import { Trophy } from 'lucide-react';

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Prizes</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-[#FFD700]/10 to-transparent p-8 rounded-lg border border-[#FFD700]/20">
            <Trophy className="w-12 h-12 text-[#FFD700] mb-4" />
            <h3 className="text-2xl font-bold mb-2">1st Place</h3>
            <p className="text-4xl font-bold text-[#FFD700] mb-4">$5,000</p>
            <ul className="text-zinc-400 space-y-2">
              <li>• Premium Developer Tools</li>
              <li>• Fast-track Interview</li>
              <li>• Mentorship Program</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-[#C0C0C0]/10 to-transparent p-8 rounded-lg border border-[#C0C0C0]/20">
            <Trophy className="w-12 h-12 text-[#C0C0C0] mb-4" />
            <h3 className="text-2xl font-bold mb-2">2nd Place</h3>
            <p className="text-4xl font-bold text-[#C0C0C0] mb-4">$3,000</p>
            <ul className="text-zinc-400 space-y-2">
              <li>• Developer Tools</li>
              <li>• Tech Company Swag</li>
              <li>• Cloud Credits</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-[#CD7F32]/10 to-transparent p-8 rounded-lg border border-[#CD7F32]/20">
            <Trophy className="w-12 h-12 text-[#CD7F32] mb-4" />
            <h3 className="text-2xl font-bold mb-2">3rd Place</h3>
            <p className="text-4xl font-bold text-[#CD7F32] mb-4">$2,000</p>
            <ul className="text-zinc-400 space-y-2">
              <li>• Developer Tools</li>
              <li>• Tech Company Swag</li>
              <li>• Cloud Credits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}