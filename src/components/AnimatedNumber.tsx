import React from 'react';

interface AnimatedNumberProps {
  number: string;
  className?: string;
}

export default function AnimatedNumber({ number, className = '' }: AnimatedNumberProps) {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10 text-black">{number}</span>
      <span className="absolute -top-2 -left-2 text-yellow-300 opacity-50 blur-sm">{number}</span>
      <span className="absolute -bottom-2 -right-2 text-yellow-500 opacity-50 blur-sm">{number}</span>
    </div>
  );
}