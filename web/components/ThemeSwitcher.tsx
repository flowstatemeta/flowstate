'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@sanity/icons'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  // Avoid rendering the button on the server to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
  )
}