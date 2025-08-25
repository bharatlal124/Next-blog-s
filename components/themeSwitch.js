'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themes = ['system', 'light', 'dark']
  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme || 'system')
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <MoonIcon className="w-5 h-5" />
      case 'dark':
        return <SunIcon className="w-5 h-5" />
      default:
        return <ComputerDesktopIcon className="w-5 h-5" />
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm"
    >
      {getIcon()}
      <span className="ml-2 capitalize">{theme}</span>
    </button>
  )
}

export default ThemeSwitch
