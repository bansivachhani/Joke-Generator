import { JokeApiResponse } from '../types/joke';

const JOKE_API_URL = 'https://icanhazdadjoke.com/';

export const fetchRandomJoke = async (): Promise<JokeApiResponse> => {
  try {
    const response = await fetch(JOKE_API_URL, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw new Error('Failed to fetch joke. Please try again.');
  }
};