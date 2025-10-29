/**
 * Simple accessible spinner
 */
import React from "react"

export default function Spinner() {
  return (
    <div role="status" aria-live="polite" className="flex justify-center">
      <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
