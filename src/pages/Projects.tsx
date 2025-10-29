/**
 * Projects page - contains three demo cards: Pokemon, Weather, Exchange
 * Cards lazy-load for performance
 */
import React, { Suspense, lazy } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Spinner from "../components/ui/Spinner"

const PokemonCard = lazy(() => import("../components/projects/PokemonCard"))
const WeatherCard = lazy(() => import("../components/projects/WeatherCard"))
const ExchangeCard = lazy(() => import("../components/projects/ExchangeCard"))

export default function Projects(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto p-6 grid gap-6">
        <Suspense fallback={<Spinner />}>
          <PokemonCard />
          <WeatherCard />
          <ExchangeCard />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
