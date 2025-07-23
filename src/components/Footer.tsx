import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pb-12 text-center relative z-10">
      <div className="flex items-center justify-center space-x-2 text-gray-500 text-lg">
        <span>Made with</span>
        <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
        <span>and</span>
        <Code className="w-5 h-5 text-blue-500" />
        <span>for endless laughter</span>
      </div>
      
      <div className="mt-6 text-base text-gray-400">
        <p>Jokes powered by <a href="https://icanhazdadjoke.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 font-medium transition-colors duration-200">icanhazdadjoke.com</a></p>
      </div>
    </footer>
  );
};