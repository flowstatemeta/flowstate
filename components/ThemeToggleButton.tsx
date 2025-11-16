'use client'

import { useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggleButton() {
  useEffect(() => {
    // This is to ensure the button shows the correct icon on initial load
    // in case the theme was set by the system preference.
    const isDark = document.documentElement.classList.contains('dark');
    // We can directly manipulate the button's content if needed, but CSS handles it.
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    // Dispatch a custom event that other components can listen to.
    window.dispatchEvent(new CustomEvent('theme-changed'))
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 group"
      aria-label="Toggle theme"
    >
      <SunIcon className="h-6 w-6 hidden dark:block" />
      <MoonIcon className="h-6 w-6 block dark:hidden" />
    </button>
  )
}