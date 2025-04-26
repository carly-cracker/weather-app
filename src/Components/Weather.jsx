import { useState, useEffect } from 'react';

export default function useWeather() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY; 

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert('Error fetching weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(); }, [city]);

  return { city, setCity, weather, loading, fetchWeather };
}