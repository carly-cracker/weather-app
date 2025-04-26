export default function WeatherDisplay({ weather }) {
    if (!weather) return <p>No weather data</p>;
  
    return (
      <div>
        <h2>{weather.name}, {weather.sys?.country}</h2>
        <p>{Math.round(weather.main.temp)}°C</p>
        <p>{weather.weather[0].description}</p>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
          alt="Weather icon"
        />
      </div>
    );
  }