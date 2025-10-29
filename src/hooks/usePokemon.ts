/**
 * usePokemon - custom hook to fetch Pokémon data
 * - Accepts `name` string; returns { data, loading, error, refetch }
 */
import { useCallback, useEffect, useState } from "react"

export interface PokemonData {
  name: string
  sprites?: { front_default?: string }
  height?: number
  weight?: number
  types?: { type: { name: string } }[]
}

export function usePokemon(initialName = "pikachu") {
  const [name, setName] = useState(initialName)
  const [data, setData] = useState<PokemonData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPokemon = useCallback(
    async (n = name) => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${n.toLowerCase()}`)
        if (!res.ok) throw new Error("Pokémon không tồn tại")
        const json = await res.json()
        setData(json)
      } catch (err: any) {
        setError(err.message || "Lỗi")
        setData(null)
      } finally {
        setLoading(false)
      }
    },
    [name]
  )

  useEffect(() => {
    fetchPokemon(name)
  }, [fetchPokemon, name])

  return {
    name,
    setName,
    data,
    loading,
    error,
    refetch: () => fetchPokemon(name)
  }
}
