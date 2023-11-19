import React, { useState } from 'react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (kelvin) => {
    return isCelsius ? (kelvin - 273.15).toFixed(1) : ((kelvin * 9) / 5 - 459.67).toFixed(1);
  };

  return (
    <div className="weather-display">
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>
            Temperature: {convertTemperature(weatherData.main.temp)}{' '}
            {isCelsius ? '°C' : '°F'}
          </p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <i className={`icon owf owf-${weatherData.weather[0].id} owf-2x`}></i>
        </div>
      )}

      {forecastData && (
        <div>
          <h3>5-Day Forecast:</h3>
          <div className="row">
            {forecastData.list.slice(0, 5).map((item) => (
              <div key={item.dt} className="col-md-2 forecast-item">
                <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                <p>
                  Temp: {convertTemperature(item.main.temp)}{' '}
                  {isCelsius ? '°C' : '°F'}
                </p>
                <p>Weather: {item.weather[0].description}</p>
                <i className={`icon owf owf-${item.weather[0].id} owf-2x`}></i>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="unitConversion"
          checked={isCelsius}
          onChange={toggleTemperatureUnit}
        />
        <label className="form-check-label" htmlFor="unitConversion">
          {isCelsius ? 'Use Fahrenheit' : 'Use Celsius'}
        </label>
      </div>
    </div>
  );
};

export default WeatherDisplay;
