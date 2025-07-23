import React from 'react';
import { Smile, Sparkles, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            <Smile className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <div className="absolute -top-2 -right-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
          </div>
          <div className="absolute -bottom-1 -left-1">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 tracking-tight">
        Joke Generator
      </h1>
      
      <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
        Discover endless laughter with our curated collection of <span className="font-semibold text-purple-600">premium jokes</span> that'll brighten your day.
      </p>
      
      <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Fresh Content</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>Family Friendly</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span>Instant Delivery</span>
        </div>
      </div>
    </div>
  );
};