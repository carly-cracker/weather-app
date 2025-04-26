import React from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherDisplay({ weather }) {
  return (
    <div>
      <WeatherCard weather={weather} />
    </div>
  );
}