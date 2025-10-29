/**
 * useWeather - fetches current weather from Open-Meteo for given lat/lon
 * Returns { data, loading, error, fetchFor }
 */
import { useCallback, useState } from "react"

export interface WeatherData {
  temperature: number
  windspeed: number
  weathercode: number
}

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFor = useCallback(async (lat: number, lon: number) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      )
      if (!res.ok) throw new Error("Không thể lấy dữ liệu thời tiết")
      const json = await res.json()
      const cw = json.current_weather
      setData({
        temperature: cw.temperature,
        windspeed: cw.windspeed,
        weathercode: cw.weathercode
      })
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải thời tiết")
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchFor }
}
