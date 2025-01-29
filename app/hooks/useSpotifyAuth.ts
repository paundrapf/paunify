"use client"

import { useState, useEffect } from "react"

export function useSpotifyAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check")
        if (response.ok) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Auth check error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { isAuthenticated, isLoading }
}

