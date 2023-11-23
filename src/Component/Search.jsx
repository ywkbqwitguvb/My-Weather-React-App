import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setWeatherData }) => {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://forecast9.p.rapidapi.com/', {
        headers: {
          'X-RapidAPI-Key': '312d6e12b6msh3c4c72e6f8c2506p1e2bccjsn29bbc68f4298',
          'X-RapidAPI-Host': 'forecast9.p.rapidapi.com',
        },
        params: {
          q: city,  // Assuming city is the parameter for the city name
        },
      });

      const weatherData = {
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        city: response.data.name,
      };

      setWeatherData(weatherData);
      setError('');
    } catch (error) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search by City</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search by Location</button>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Search;
