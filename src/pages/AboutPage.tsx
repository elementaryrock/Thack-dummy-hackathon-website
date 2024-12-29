import React from 'react';
import { Code2, Users, Trophy, Sparkles } from 'lucide-react';
import AnimatedButton from '../components/buttons/AnimatedButton';
import CodeRain from '../components/CodeRain';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <CodeRain />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-black mb-12 text-center">
            <span className="text-yellow-400 glitch-text" data-text="ABOUT">ABOUT</span>
            <br />
            <span className="text-white typing-text">THACK HACKATHON</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                <Code2 className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">Elite Competition</h3>
                <p className="text-zinc-400">Join the most prestigious coding competition designed to identify and celebrate exceptional programming talent.</p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                <Users className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">Global Community</h3>
                <p className="text-zinc-400">Connect with fellow coders, mentors, and industry experts from around the world.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">Recognition & Rewards</h3>
                <p className="text-zinc-400">Earn your place among the top 100 coders and unlock exclusive opportunities and substantial prizes.</p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">Innovation Hub</h3>
                <p className="text-zinc-400">Work on cutting-edge projects and solve real-world problems using the latest technologies.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <AnimatedButton variant="primary" size="lg">
              Join the Elite
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}