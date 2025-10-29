import React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
