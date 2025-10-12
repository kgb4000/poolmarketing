'use client'

import { useState, useEffect } from 'react'

export default function DynamicYear() {
  const [year, setYear] = useState(2024) // Default fallback year
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setYear(new Date().getFullYear())
  }, [])

  // Show fallback year until mounted to prevent hydration mismatch
  return <span>{year}</span>
}