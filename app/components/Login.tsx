"use client"

import { useState } from "react"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/login")
      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("Failed to get authorization URL")
      }
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLogin}
      disabled={isLoading}
      className="bg-green-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition-colors disabled:opacity-50"
    >
      {isLoading ? "Loading..." : "Login with Spotify"}
    </button>
  )
}

