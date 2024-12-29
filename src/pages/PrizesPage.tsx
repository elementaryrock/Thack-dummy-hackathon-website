import React from 'react';
import { Trophy, Gift, Briefcase, Award } from 'lucide-react';
import AnimatedButton from '../components/buttons/AnimatedButton';

export default function PrizesPage() {
  return (
    <div className="min-h-screen bg-black py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black mb-12 text-center">
            <span className="text-yellow-400 glitch-text" data-text="PRIZES">PRIZES</span>
            <br />
            <span className="text-white typing-text">& REWARDS</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-b from-[#FFD700]/10 to-transparent p-8 rounded-lg border border-[#FFD700]/20 transform hover:scale-105 transition-all">
              <Trophy className="w-16 h-16 text-[#FFD700] mb-6" />
              <h3 className="text-3xl font-bold mb-2">1st Place</h3>
              <div className="text-5xl font-bold text-[#FFD700] mb-6">₹5,00,000</div>
              <ul className="text-zinc-400 space-y-3">
                <li className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-[#FFD700]" />
                  Premium Developer Tools
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#FFD700]" />
                  Fast-track Interview
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#FFD700]" />
                  1-Year Mentorship
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-[#C0C0C0]/10 to-transparent p-8 rounded-lg border border-[#C0C0C0]/20 transform hover:scale-105 transition-all">
              <Trophy className="w-16 h-16 text-[#C0C0C0] mb-6" />
              <h3 className="text-3xl font-bold mb-2">2nd Place</h3>
              <div className="text-5xl font-bold text-[#C0C0C0] mb-6">₹3,00,000</div>
              <ul className="text-zinc-400 space-y-3">
                <li className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-[#C0C0C0]" />
                  Developer Tools Bundle
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#C0C0C0]" />
                  Job Referrals
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#C0C0C0]" />
                  6-Month Mentorship
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-[#CD7F32]/10 to-transparent p-8 rounded-lg border border-[#CD7F32]/20 transform hover:scale-105 transition-all">
              <Trophy className="w-16 h-16 text-[#CD7F32] mb-6" />
              <h3 className="text-3xl font-bold mb-2">3rd Place</h3>
              <div className="text-5xl font-bold text-[#CD7F32] mb-6">₹2,00,000</div>
              <ul className="text-zinc-400 space-y-3">
                <li className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-[#CD7F32]" />
                  Developer Tools
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#CD7F32]" />
                  Network Access
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#CD7F32]" />
                  3-Month Mentorship
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <AnimatedButton variant="primary" size="lg">
              Register Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}