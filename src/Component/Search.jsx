import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onWeatherData, onForecastData }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
      
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      // Handle successful API requests
      onWeatherData(weatherResponse.data);
      onForecastData(forecastResponse.data);
      setError(null);
    } catch (error) {
      // Handle failed API requests
      setError('Error fetching weather data. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="search">
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Search;
