/**
 * Error message block component
 */
import React from "react"

export default function ErrorMessage({ message }: { message: string }) {
  return <div className="text-red-600 font-medium text-center">{message}</div>
}
