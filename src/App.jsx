import React, { useState } from 'react';
import Search from './Component/Search';
import WeatherDisplay from './Component/WeatherDisplay';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
