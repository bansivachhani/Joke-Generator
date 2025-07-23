import React from 'react';
import { useJoke } from './hooks/useJoke';
import { Header } from './components/Header';
import { JokeCard } from './components/JokeCard';
import { ActionButtons } from './components/ActionButtons';
import { ErrorMessage } from './components/ErrorMessage';
import { Footer } from './components/Footer';

function App() {
  const { joke, loading, error, getNewJoke } = useJoke();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="flex flex-col items-center justify-center relative z-10">
          {error ? (
            <ErrorMessage message={error} onRetry={getNewJoke} />
          ) : (
            <>
              {joke && (
                <JokeCard joke={joke} isLoading={loading} />
              )}
              
              <ActionButtons
                onNewJoke={getNewJoke}
                loading={loading}
              />
            </>
          )}
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;