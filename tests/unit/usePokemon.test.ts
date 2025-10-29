/**
 * Unit tests for usePokemon hook
 */
import { renderHook, act } from "@testing-library/react"
import { usePokemon } from "../../src/hooks/usePokemon"

global.fetch = jest.fn()

describe("usePokemon", () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockReset()
  })

  it("fetches and returns pokemon data", async () => {
    const fake = { name: "pikachu", sprites: { front_default: "url" }, height: 4, weight: 60, types: [{ type: { name: "electric" } }] }
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => fake
    })

    const { result, waitForNextUpdate } = renderHook(() => usePokemon("pikachu"))
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.data?.name).toBe("pikachu")
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it("handles not found", async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    const { result, waitForNextUpdate } = renderHook(() => usePokemon("notfound"))
    await waitForNextUpdate()
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBeTruthy()
  })
})
