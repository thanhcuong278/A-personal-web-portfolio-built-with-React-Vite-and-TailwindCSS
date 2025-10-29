import React, { useEffect } from "react"
import Card from "../ui/Card"
import Spinner from "../ui/Spinner"
import ErrorMessage from "../ui/ErrorMessage"
import { useWeather } from "../../hooks/useWeather"

const vietnamProvinces = [
   { name: "Hanoi", lat: 21.0285, lon: 105.8542 },
  { name: "Ho Chi Minh City", lat: 10.7769, lon: 106.7009 },
  { name: "Da Nang", lat: 16.0471, lon: 108.2068 },
  { name: "Hai Phong", lat: 20.8449, lon: 106.6881 },
  { name: "Can Tho", lat: 10.0452, lon: 105.7469 },
  { name: "Bac Giang", lat: 21.281, lon: 106.197 },
  { name: "Bac Kan", lat: 22.146, lon: 105.834 },
  { name: "Bac Lieu", lat: 9.294, lon: 105.727 },
  { name: "Bac Ninh", lat: 21.1861, lon: 106.0763 },
  { name: "Ben Tre", lat: 10.2415, lon: 106.3757 },
  { name: "Binh Duong", lat: 11.3254, lon: 106.477 },
  { name: "Binh Dinh", lat: 13.782, lon: 109.219 },
  { name: "Binh Phuoc", lat: 11.75, lon: 106.833 },
  { name: "Binh Thuan", lat: 10.9804, lon: 108.261 },
  { name: "Ca Mau", lat: 9.176, lon: 105.15 },
  { name: "Cao Bang", lat: 22.672, lon: 106.26 },
  { name: "Dak Lak", lat: 12.667, lon: 108.037 },
  { name: "Dak Nong", lat: 12.006, lon: 107.69 },
  { name: "Dien Bien", lat: 21.383, lon: 103.017 },
  { name: "Dong Nai", lat: 10.946, lon: 106.82 },
  { name: "Dong Thap", lat: 10.445, lon: 105.636 },
  { name: "Gia Lai", lat: 13.983, lon: 108.002 },
  { name: "Ha Giang", lat: 22.833, lon: 104.983 },
  { name: "Ha Nam", lat: 20.541, lon: 105.912 },
  { name: "Ha Tinh", lat: 18.342, lon: 105.906 },
  { name: "Hai Duong", lat: 20.937, lon: 106.316 },
  { name: "Hau Giang", lat: 9.783, lon: 105.467 },
  { name: "Hoa Binh", lat: 20.817, lon: 105.337 },
  { name: "Hung Yen", lat: 20.646, lon: 106.051 },
  { name: "Khanh Hoa", lat: 12.238, lon: 109.196 },
  { name: "Kien Giang", lat: 10.012, lon: 105.08 },
  { name: "Kon Tum", lat: 14.35, lon: 107.983 },
  { name: "Lai Chau", lat: 22.397, lon: 103.458 },
  { name: "Lam Dong", lat: 11.95, lon: 108.45 },
  { name: "Lang Son", lat: 21.855, lon: 106.761 },
  { name: "Lao Cai", lat: 22.483, lon: 103.967 },
  { name: "Long An", lat: 10.695, lon: 106.244 },
  { name: "Nam Dinh", lat: 20.42, lon: 106.168 },
  { name: "Nghe An", lat: 18.675, lon: 105.692 },
  { name: "Ninh Binh", lat: 20.25, lon: 105.975 },
  { name: "Ninh Thuan", lat: 11.567, lon: 108.983 },
  { name: "Phu Tho", lat: 21.4, lon: 105.217 },
  { name: "Phu Yen", lat: 13.083, lon: 109.317 },
  { name: "Quang Binh", lat: 17.483, lon: 106.6 },
  { name: "Quang Nam", lat: 15.573, lon: 108.474 },
  { name: "Quang Ngai", lat: 15.12, lon: 108.8 },
  { name: "Quang Ninh", lat: 21.05, lon: 107.333 },
  { name: "Quang Tri", lat: 16.75, lon: 107.2 },
  { name: "Soc Trang", lat: 9.6, lon: 105.971 },
  { name: "Son La", lat: 21.327, lon: 103.91 },
  { name: "Tay Ninh", lat: 11.322, lon: 106.111 },
  { name: "Thai Binh", lat: 20.45, lon: 106.35 },
  { name: "Thai Nguyen", lat: 21.567, lon: 105.833 },
  { name: "Thanh Hoa", lat: 19.807, lon: 105.776 },
  { name: "Thua Thien Hue", lat: 16.463, lon: 107.59 },
  { name: "Tien Giang", lat: 10.36, lon: 106.36 },
  { name: "Tra Vinh", lat: 9.934, lon: 106.345 },
  { name: "Tuyen Quang", lat: 21.817, lon: 105.217 },
  { name: "Vinh Long", lat: 10.25, lon: 105.95 },
  { name: "Vinh Phuc", lat: 21.308, lon: 105.605 },
  { name: "Yen Bai", lat: 21.717, lon: 104.867 }
]

export default function WeatherCard(): JSX.Element {
  const { data, loading, error, fetchFor } = useWeather()

  useEffect(() => {
    fetchFor(21.0285, 105.8542)
  }, [fetchFor])

  return (
    <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h3 className="text-lg font-semibold">🌤️ Current Weather</h3>

      <div className="mt-3 flex flex-col sm:flex-row items-center gap-2">
        <button
          onClick={() => {
            if (!navigator.geolocation) {
              window.alert("Your browser does not support location detection!")
              return
            }
            navigator.geolocation.getCurrentPosition(
              (pos) => fetchFor(pos.coords.latitude, pos.coords.longitude),
              () => {
                window.alert("Unable to retrieve your location. Please enable GPS or select manually.")
              }
            )
          }}
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
        >
          📍 Use My Location
        </button>

        <select
          onChange={(e) => {
            const val = e.target.value
            if (!val) return
            const [lat, lon] = val.split(",").map(Number)
            fetchFor(lat, lon)
          }}
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <option value="">-- Select a city/province --</option>
          {vietnamProvinces.map((p) => (
            <option key={p.name} value={`${p.lat},${p.lon}`}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        {loading && <Spinner />}
        {error && <ErrorMessage message="Failed to load weather data 😢" />}
        {data && (
          <div className="text-center">
            <h4 className="text-lg font-bold">Current Data</h4>
            <p>
              Temperature: <strong>{data.temperature}°C</strong>
            </p>
            <p>Wind speed: {data.windspeed} km/h</p>
            <p>
              Condition:{" "}
              {{
                0: "☀️ Clear sky",
                1: "🌤 Few clouds",
                2: "⛅ Partly cloudy",
                3: "☁️ Overcast",
                45: "🌫 Foggy",
                51: "🌦 Light rain",
                61: "🌧 Moderate rain",
                71: "❄️ Snowfall",
                95: "⛈ Thunderstorm",
              }[data.weathercode] || "🌈 Unknown"}
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}
