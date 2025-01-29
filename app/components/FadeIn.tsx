"use client"

import { useEffect, useRef, type ReactNode } from "react"
import type React from "react" // Added import for React

interface FadeInProps {
  children: ReactNode
}

export const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="opacity-0 transition-opacity duration-1000">
      {children}
    </div>
  )
}

