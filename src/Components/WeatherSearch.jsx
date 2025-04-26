import React, { useState } from 'react';

const WeatherSearch = ({ setCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherSearch;