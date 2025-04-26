import { useState } from 'react';

export default function WeatherSearch({ setWeatherData, setLoading, setError }) {
  const [city, setCity] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/db.json');
      const data = await response.json();
      
      const foundCity = data.weather.find(item => 
        item.name.toLowerCase() === cityName.toLowerCase()
      );

      if (!foundCity) {
        throw new Error('City not found in our database');
      }
      
      // Format to match API response structure
      const formattedData = {
        name: foundCity.name,
        sys: { country: foundCity.country },
        main: {
          temp: foundCity.temp,
          feels_like: foundCity.feels_like,
          humidity: foundCity.humidity
        },
        wind: { speed: foundCity.wind_speed },
        weather: foundCity.weather
      };
      
      setWeatherData(formattedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name (London, Paris, Tokyo)"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}