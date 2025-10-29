/**
 * Unit tests for useWeather hook
 */
import { renderHook, act } from "@testing-library/react"
import { useWeather } from "../../src/hooks/useWeather"

global.fetch = jest.fn()

describe("useWeather", () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockReset()
  })

  it("fetches weather", async () => {
    const fake = { current_weather: { temperature: 25, windspeed: 5, weathercode: 0 } }
    ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => fake })
    const { result, waitForNextUpdate } = renderHook(() => useWeather())
    act(() => {
      result.current.fetchFor(21, 105)
    })
    await waitForNextUpdate()
    expect(result.current.data?.temperature).toBe(25)
    expect(result.current.error).toBeNull()
  })
})
