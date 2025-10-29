/**
 * useExchangeRate - fetches latest USD -> VND from open.er-api.com
 */
import { useCallback, useState } from "react"

export interface ExchangeData {
  rate: number
  updatedAt: string
}

export function useExchangeRate() {
  const [data, setData] = useState<ExchangeData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRate = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const r = await fetch("https://open.er-api.com/v6/latest/USD")
      if (!r.ok) throw new Error("Không thể kết nối API")
      const json = await r.json()
      if (!json || !json.rates || !json.rates.VND) throw new Error("Dữ liệu không hợp lệ")
      setData({
        rate: Number(json.rates.VND),
        updatedAt: json.time_last_update_utc
      })
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải tỷ giá")
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchRate }
}
