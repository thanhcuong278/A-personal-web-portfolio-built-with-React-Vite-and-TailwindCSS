/**
 * Home page (index)
 * Composes Header, Hero, Skills, Contact, Footer
 */
import React, { Suspense } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
