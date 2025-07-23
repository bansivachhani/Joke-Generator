import React from 'react';
import { RefreshCw, Heart } from 'lucide-react';

interface ActionButtonsProps {
  onNewJoke: () => void;
  loading: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onNewJoke,
  loading,
}) => {
  return (
    <div className="flex justify-center items-center mt-12">
      <button
        onClick={onNewJoke}
        disabled={loading}
        className={`
          group relative flex items-center space-x-3 px-10 py-5 rounded-2xl
          bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 
          hover:from-purple-600 hover:via-blue-600 hover:to-indigo-700
          text-white font-bold text-lg shadow-2xl hover:shadow-3xl
          transform transition-all duration-300 hover:-translate-y-1 hover:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          min-w-[220px] justify-center overflow-hidden
        `}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <RefreshCw 
          className={`w-6 h-6 relative z-10 ${loading ? 'animate-spin' : 'group-hover:rotate-180'} transition-transform duration-500`} 
        />
        <span className="relative z-10">{loading ? 'Crafting Magic...' : 'Generate New Joke'}</span>
      </button>
    </div>
  );
};