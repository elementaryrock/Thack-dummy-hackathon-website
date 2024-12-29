import React from 'react';

export default function CodeRain() {
  return (
    <div className="code-rain-container absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="code-rain-column" style={{ 
          left: `${i * 5}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}>
          {[...Array(30)].map((_, j) => (
            <span key={j} className="code-rain-character" style={{
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}>
              {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}