import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setWeatherData }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
      );
      
      const { main } = response.data;
      setWeatherData({
        temperature: main.temp,
        description: response.data.weather[0].description,
        city: response.data.name,
      });

      setError('');
    } catch (error) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}
    </div>
    
  );
};

export default Search;
