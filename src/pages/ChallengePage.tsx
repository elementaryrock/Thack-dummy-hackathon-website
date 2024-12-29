import React from 'react';
import { Code, Brain, Cpu, Network } from 'lucide-react';
import AnimatedButton from '../components/buttons/AnimatedButton';

export default function ChallengePage() {
  const challenges = [
    {
      icon: <Code className="w-12 h-12 text-yellow-400" />,
      title: "Algorithm Mastery",
      description: "Solve complex algorithmic problems and optimize for efficiency.",
      difficulty: "Hard",
      points: 1000
    },
    {
      icon: <Brain className="w-12 h-12 text-yellow-400" />,
      title: "AI Challenge",
      description: "Build intelligent systems using machine learning.",
      difficulty: "Expert",
      points: 1500
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-400" />,
      title: "System Design",
      description: "Design scalable and efficient software architectures.",
      difficulty: "Medium",
      points: 800
    },
    {
      icon: <Network className="w-12 h-12 text-yellow-400" />,
      title: "Full-Stack Development",
      description: "Create end-to-end applications with modern technologies.",
      difficulty: "Hard",
      points: 1200
    }
  ];

  return (
    <div className="min-h-screen bg-black py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black mb-12 text-center">
            <span className="text-yellow-400 glitch-text" data-text="CURRENT">CURRENT</span>
            <br />
            <span className="text-white typing-text">CHALLENGES</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {challenge.icon}
                    <h3 className="text-2xl font-bold mt-4">{challenge.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm">
                      {challenge.difficulty}
                    </span>
                    <div className="mt-2 text-yellow-400 font-bold">
                      {challenge.points} pts
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 mb-6">{challenge.description}</p>
                <AnimatedButton variant="outline" size="sm">
                  Start Challenge
                </AnimatedButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}