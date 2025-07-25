const axios = require('axios')
const { OPENWEATHER_API_KEY } = require('../config/env')

// Қала, lat, lon
const cities = [
  { name: 'Almaty', lat: 43.2389, lon: 76.8897 },
  { name: 'Astana', lat: 51.1605, lon: 71.4704 },
  { name: 'Shymkent', lat: 42.3417, lon: 69.5901 },
  { name: 'Aktobe', lat: 50.2839, lon: 57.167 },
  { name: 'Karaganda', lat: 49.8028, lon: 73.1026 },
  { name: 'Pavlodar', lat: 52.2871, lon: 76.9674 },
  { name: 'Taraz', lat: 42.8999, lon: 71.3694 },
  { name: 'Kyzylorda', lat: 44.8488, lon: 65.4823 },
  { name: 'Atyrau', lat: 47.0945, lon: 51.923 },
  { name: 'Uralsk', lat: 51.2333, lon: 51.3667 },
  { name: 'Kostanay', lat: 53.2194, lon: 63.6283 }
]

const getWeather = async (req, res) => {
  try {
    const results = await Promise.all(
      cities.map(async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&lang=ru&appid=${OPENWEATHER_API_KEY}`
        const response = await axios.get(url)

        return {
          city: city.name,
          lat: city.lat,
          lon: city.lon,
          temp: response.data.main.temp,
          desc: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        }
      })
    )

    res.json(results)
  } catch (err) {
    console.error('Ауа райын алу қатесі:', err)
    res.status(500).json({ message: 'Ауа райын жүктей алмадық' })
  }
}

module.exports = { getWeather }
