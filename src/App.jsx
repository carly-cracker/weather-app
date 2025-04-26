import { useAuth } from './auth/AuthProvider';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import './App.css';
import WeatherSearch from './Components/WeatherSearch';
import WeatherDisplay from './Components/WeatherDisplay';


function App() {
  const { user } = useAuth();

  return (
    <div>
      <h1>WEATHER APP</h1>
      {!user ? (
        <>
          <Login />
          <Signup />
        </>
      ) : (
        <>
          <WeatherSearch />
          <WeatherDisplay />
        </>
      )}
    </div>
  );
}

export default App;