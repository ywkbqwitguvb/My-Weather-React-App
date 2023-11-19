import React, { useState } from 'react';
import Search from './Component/Search';
import WeatherDisplay from './Component/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const handleForecastData = (data) => {
    setForecastData(data);
  };

  return (
    <div className="App">
      <Search onWeatherData={handleWeatherData} onForecastData={handleForecastData} />
      <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />
    </div>
  );
}

export default App;
