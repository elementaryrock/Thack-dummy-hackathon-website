import React from 'react';
import { cn } from '../../utils/cn';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function AnimatedButton({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-md font-bold transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500 before:absolute before:inset-0 before:bg-black/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300",
    outline: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}