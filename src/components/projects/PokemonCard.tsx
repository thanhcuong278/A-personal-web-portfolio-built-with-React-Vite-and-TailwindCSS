/**
 * Pokémon card component
 * - Uses usePokemon hook
 * - Provides input and button and displays Pokemon info
 */
import React, { useState } from "react"
import Card from "../ui/Card"
import Spinner from "../ui/Spinner"
import ErrorMessage from "../ui/ErrorMessage"
import { usePokemon } from "../../hooks/usePokemon"

export default function PokemonCard(): JSX.Element {
  const { name, setName, data, loading, error, refetch } = usePokemon("pikachu")
  const [input, setInput] = useState("")

  return (
    <Card>
      <h3 className="text-lg font-semibold">🔮 Pokémon API Demo</h3>

      <div className="mt-3 flex flex-col sm:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Enter Pokémon name (e.g. pikachu)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (input.trim()) {
                setName(input.trim())
              } else {
                window.alert("Please enter a Pokémon name!")
              }
            }
          }}
          className="border rounded px-3 py-2 w-full sm:w-64"
          aria-label="Enter Pokémon name"
        />
        <button
          onClick={() => {
            if (!input.trim()) {
              window.alert("Please enter a Pokémon name!")
              return
            }
            setName(input.trim())
          }}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        {loading && <Spinner />}
        {error && <ErrorMessage message={`❌ Pokémon not found "${name}".`} />}
        {data && (
          <div className="text-center">
            <h4 className="text-xl font-bold">{data.name.toUpperCase()}</h4>
            {data.sprites?.front_default && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.sprites.front_default} alt={data.name} className="mx-auto mt-2" />
            )}
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <p>Types: {data.types?.map((t) => t.type.name).join(", ")}</p>
          </div>
        )}
      </div>
    </Card>
  )
}
