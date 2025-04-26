import { useState, useEffect } from 'react';

export default function useWeather() {
  const [city, setCity] = useState('London'); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const API_KEY = '250d12cc4cdf48e78cd95036252604'; 

  const fetchWeather = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(); 
  }, [city]);

  return { city, setCity, weather, loading, error, fetchWeather };
}