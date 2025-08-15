'use client'

import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const stored = localStorage.getItem('theme') as Theme | null
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const theme = stored ?? (systemDark ? 'dark' : 'light')
		document.documentElement.classList.toggle('dark', theme === 'dark')
	}, [])

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted) {
		return <>{children}</>
	}

	return <>{children}</>
}

export function useTheme() {
	const [mounted, setMounted] = useState(false)
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		setMounted(true)
		const stored = localStorage.getItem('theme') as Theme | null
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const initialTheme = stored ?? (systemDark ? 'dark' : 'light')
		setTheme(initialTheme)
	}, [])

	useEffect(() => {
		if (!mounted) return
		document.documentElement.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme, mounted])

	const toggle = useCallback(() => {
		if (!mounted) return
		setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
	}, [mounted])

	return { theme, setTheme, toggle, mounted }
}