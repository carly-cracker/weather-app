import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return <p>No weather data available</p>;

  const { location, current } = weather;

  return (
    <div >
      <h2>{location.name}, {location.country}</h2>
      <p>{Math.round(current.temp_c)}°C</p>
      <p>{current.condition.text}</p>
      <img
        src={`https:${current.condition.icon}`} 
        alt={current.condition.text}
        
      />
    </div>
  );
};
export default WeatherCard