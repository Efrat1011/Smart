import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/weather');
      setWeatherData(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.error('Ауа райын алу қатесі:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = weatherData.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200 dark:from-blue-950 dark:to-green-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-900 dark:text-blue-100">🌾 Қазақстан қалаларындағы ауа райы</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Қала атауын енгізіңіз..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-blue-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
          >
            🔍 Іздеу
          </button>
        </div>

        {loading ? (
          <p className="text-gray-700 dark:text-gray-200">⏳ Жүктелуде...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((city, idx) => (
                <li
                  key={idx}
                  className="bg-white dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 shadow-lg hover:scale-105 transition transform"
                >
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-white">{city.city}</h3>
                  <p className="text-gray-700 dark:text-gray-300">🌡 Температура: {city.temperature}°C</p>
                  <p className="text-gray-700 dark:text-gray-300">🌤 Сипаттама: {city.description}</p>
                </li>
              ))
            ) : (
              <p className="col-span-3 text-red-600 font-semibold">Қала табылмады 😕</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Weather;
