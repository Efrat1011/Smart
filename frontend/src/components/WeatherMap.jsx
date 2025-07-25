// src/components/WeatherMap.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Иконка жасау
const weatherIcon = (iconCode) =>
  new L.Icon({
    iconUrl: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  })

export default function WeatherMap() {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    axios.get('/api/weather').then((res) => {
      setWeatherData(res.data)
    })
  }, [])

  return (
    <div className="h-screen p-4">
      <h2 className="text-2xl font-bold text-center mb-4">🗺️ Ауа райы картасы</h2>
      <MapContainer center={[47.0, 66.0]} zoom={5} className="h-[80vh] w-full rounded-xl shadow-lg z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {weatherData.map((city) => (
          <Marker
            key={city.city}
            position={[city.lat, city.lon]}
            icon={weatherIcon(city.icon)}
          >
            <Popup>
              <div className="text-center">
                <strong>{city.city}</strong>
                <br />
                🌡 {city.temp}°C
                <br />
                {city.desc}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
