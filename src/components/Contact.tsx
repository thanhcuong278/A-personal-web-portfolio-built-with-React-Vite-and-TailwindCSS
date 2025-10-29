/**
 * Contact section - shows email, GitHub, LinkedIn cards
 * Dark mode supported for background and text
 */
import React from "react"

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto p-6 text-center text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <h2 className="text-2xl font-semibold">📬 Contact</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {/* Email */}
        <a
          href="mailto:thanhcuong27898@gmail.com"
          className="w-40 bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:-translate-y-1 transition-transform flex flex-col items-center"
          onClick={() =>
            window.alert("Thank you for your interest! Your message will open in your email app.")
          }
        >
          <img src="https://img.icons8.com/fluency/96/mail.png" alt="Email Icon" width={48} height={48} />
          <p className="mt-2 font-semibold text-sm text-[#d44638] dark:text-[#ff6f61]">Email</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/thanhcuong278"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:-translate-y-1 transition-transform flex flex-col items-center"
        >
          <img src="https://img.icons8.com/ios-glyphs/96/github.png" alt="GitHub Icon" width={48} height={48} />
          <p className="mt-2 font-semibold text-sm">GitHub</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/thanh-c%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-20373a282/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:-translate-y-1 transition-transform flex flex-col items-center"
        >
          <img src="https://img.icons8.com/color/96/linkedin.png" alt="LinkedIn Icon" width={48} height={48} />
          <p className="mt-2 font-semibold text-sm text-[#0077b5] dark:text-[#5da8e8]">LinkedIn</p>
        </a>
      </div>
    </section>
  )
}
