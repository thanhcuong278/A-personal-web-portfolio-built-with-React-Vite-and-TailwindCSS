/**
 * Unit tests for useExchangeRate hook
 */
import { renderHook, act } from "@testing-library/react"
import { useExchangeRate } from "../../src/hooks/useExchangeRate"

global.fetch = jest.fn()

describe("useExchangeRate", () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockReset()
  })

  it("fetches exchange rate", async () => {
    const fake = { rates: { VND: 24000 }, time_last_update_utc: "Wed, 01 Jan 2025 00:00:00 GMT" }
    ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => fake })
    const { result, waitForNextUpdate } = renderHook(() => useExchangeRate())
    act(() => {
      result.current.fetchRate()
    })
    await waitForNextUpdate()
    expect(result.current.data?.rate).toBe(24000)
    expect(result.current.data?.updatedAt).toBe(fake.time_last_update_utc)
  })
})
