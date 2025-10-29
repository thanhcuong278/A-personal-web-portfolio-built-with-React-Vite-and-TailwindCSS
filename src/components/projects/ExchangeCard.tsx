import React, { useEffect } from "react"
import Card from "../ui/Card"
import Spinner from "../ui/Spinner"
import ErrorMessage from "../ui/ErrorMessage"
import { useExchangeRate } from "../../hooks/useExchangeRate"

export default function ExchangeCard(): JSX.Element {
  const { data, loading, error, fetchRate } = useExchangeRate()

  useEffect(() => {
    fetchRate()
  }, [fetchRate])

  return (
    <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h3 className="text-lg font-semibold">💱 USD → VND Exchange Rate</h3>
      <div className="mt-4 text-center">
        {loading && <Spinner />}
        {error && (
          <ErrorMessage message="⚠️ Unable to load USD → VND exchange rate. Please try again later." />
        )}
        {data && (
          <>
            <p>
              1 USD = <strong>{data.rate.toLocaleString("vi-VN")} VND</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Update: {data.updatedAt}
            </p>
          </>
        )}
        <div className="mt-3">
          <button
            onClick={fetchRate}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
          >
            🔄 Refresh
          </button>
        </div>
      </div>
    </Card>
  )
}
