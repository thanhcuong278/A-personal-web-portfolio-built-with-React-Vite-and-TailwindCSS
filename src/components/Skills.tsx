/**
 * Skills grid component
 * - Displays a set of skills with icons
 * - Supports dark mode (background + text colors)
 */
import React from "react"

const skills: { name: string; src: string; alt?: string }[] = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
]

export default function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto p-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <h2 className="text-2xl font-semibold">⚙️ Technical Skill</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:-translate-y-1 transition-transform duration-200"
          >
            <img src={s.src} alt={s.name} width={60} height={60} className="mx-auto" />
            <p className="text-center font-medium mt-2">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
