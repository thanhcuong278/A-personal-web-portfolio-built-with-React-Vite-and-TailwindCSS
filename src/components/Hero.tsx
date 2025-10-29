/**
 * Hero section (About)
 * - Shows portrait and intro text
 * - Uses responsive layout
 */
import React from "react"

export default function Hero(): JSX.Element {
  return (
    <section id="about" className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <picture className="flex-shrink-0 flex justify-center w-full md:w-auto">
          {/* Responsive circular portrait with glow effect */}
          <img
            src="/images/chandung.jpg"
            alt="Ảnh đại diện Nguyễn Thanh Cường"
            loading="lazy"
            className="
              w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56
              rounded-full
              border-4 border-blue-400/70
              shadow-[0_0_20px_rgba(59,130,246,0.4)]
              object-cover
              transition-all duration-500 ease-in-out
              hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
            "
          />
        </picture>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">👋 About Me</h2>
          <p className="mt-2">
            Hello! I'm <strong>Nguyen Thanh Cuong</strong>, a web developer passionate about technology, creativity, and continuous learning.
          </p>
          <p className="mt-2">
            I love building modern interfaces, creating smooth user experiences, and exploring emerging technologies like ReactJS, Node.js, and AI-powered web applications.
          </p>
        </div>
      </div>
    </section>
  )
}
