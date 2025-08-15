'use client'

import { useTheme } from '@/lib/theme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
	const { theme, toggle, mounted } = useTheme()
	const isDark = theme === 'dark'
	
	// Show loading state while mounting to prevent hydration mismatch
	if (!mounted) {
		return (
			<button
				aria-label="Toggle theme"
				disabled
				className="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm opacity-50"
			>
				<Moon className="h-4 w-4" />
			</button>
		)
	}
	
	return (
		<button
			aria-label="Toggle theme"
			onClick={toggle}
			className="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
		>
			{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
		</button>
	)
}

