import { useState, useEffect } from 'react';
import { Joke } from '../types/joke';
import { fetchRandomJoke } from '../services/jokeApi';

export const useJoke = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getNewJoke = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const newJoke = await fetchRandomJoke();
      setJoke(newJoke);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return {
    joke,
    loading,
    error,
    getNewJoke,
  };
};