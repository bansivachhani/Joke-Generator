import React from 'react';
import { Quote } from 'lucide-react';
import { Joke } from '../types/joke';

interface JokeCardProps {
  joke: Joke;
  isLoading?: boolean;
}

export const JokeCard: React.FC<JokeCardProps> = ({ joke, isLoading = false }) => {
  return (
    <div className={`
      relative bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full mx-4
      transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2
      border border-gray-100 backdrop-blur-sm
      ${isLoading ? 'animate-pulse' : 'animate-fadeIn'}
    `}>
      {/* Decorative gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-3xl opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10"></div>
      
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Quote className="w-8 h-8 text-white drop-shadow-md" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 animate-shimmer"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2 animate-shimmer"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-5/6 animate-shimmer"></div>
            </div>
          ) : (
            <p className="text-gray-800 text-xl md:text-2xl leading-relaxed font-medium tracking-wide">
              {joke.joke}
            </p>
          )}
        </div>
      </div>
      
      {/* Subtle bottom accent */}
      {!isLoading && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Joke #{joke.id.slice(0, 8)}</span>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};