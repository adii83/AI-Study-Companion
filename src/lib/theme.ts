'use client'

import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		const stored = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null
		const systemDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
		const nextTheme: Theme = stored ?? (systemDark ? 'dark' : 'light')
		setTheme(nextTheme)
	}, [])

	useEffect(() => {
		if (typeof document === 'undefined') return
		const root = document.documentElement
		root.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])

	return children
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === 'undefined') return 'light'
		return ((localStorage.getItem('theme') as Theme) || 'light') as Theme
	})

	useEffect(() => {
		const root = document.documentElement
		root.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggle = useCallback(() => {
		setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
	}, [])

	return { theme, setTheme, toggle }
}

