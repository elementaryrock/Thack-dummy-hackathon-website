import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ChallengePage from './pages/ChallengePage';
import PrizesPage from './pages/PrizesPage';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutPage />
      <ChallengePage />
      <PrizesPage />
      <FAQ />
      
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400"> 2024 THack Hackathon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;