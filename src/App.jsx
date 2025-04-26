import { useAuth } from './auth/AuthProvider';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import './App.css';

import WeatherSearch from './Components/WeatherSearch';
import WeatherDisplay from './Components/WeatherDisplay';
import useWeather from './useWeather';

function App() {
  const { user } = useAuth();
  const { city, setCity, weather, loading, error } = useWeather(); 

  return (
    <div className="App">
      <h1>WEATHER APP</h1>

      {!user ? (
        <>
          <Login />
          <Signup />
        </>
      ) : (
        <>
          <WeatherSearch setCity={setCity} /> 
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
          <WeatherDisplay weather={weather} /> 
        </>
      )}
    </div>
  );
}

export default App;
