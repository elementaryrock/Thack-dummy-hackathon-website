import React from 'react';
import { Trophy, Code, Target } from 'lucide-react';
import AnimatedButton from './buttons/AnimatedButton';

export default function Challenge() {
  return (
    <div className="bg-black clip-diagonal-reverse py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-black mb-12 text-center">
            <span className="text-yellow-400">CURRENT</span>
            <br />
            <span className="text-white">CHALLENGE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 transform hover:scale-105 transition">
              <Code className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Solve Problems</h3>
              <p className="text-zinc-400 mb-6">Complete challenging coding problems and maintain a competitive rank.</p>
              <AnimatedButton variant="outline" size="sm">
                Start Coding
              </AnimatedButton>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 transform hover:scale-105 transition">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Build Projects</h3>
              <p className="text-zinc-400 mb-6">Create innovative solutions using cutting-edge technologies.</p>
              <AnimatedButton variant="outline" size="sm">
                View Projects
              </AnimatedButton>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 transform hover:scale-105 transition">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Win Prizes</h3>
              <p className="text-zinc-400 mb-6">Compete for a prize pool worth ₹10,00,000 and exclusive opportunities.</p>
              <AnimatedButton variant="outline" size="sm">
                See Prizes
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}