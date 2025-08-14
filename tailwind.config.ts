import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: { DEFAULT: 'var(--bg-default)', subtle: 'var(--bg-subtle)' },
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)'
				},
				surface: 'var(--surface)',
				border: 'var(--border)',
				primary: { 600: 'var(--primary-600)', 700: 'var(--primary-700)' },
				accent: {
					green: 'var(--accent-green)',
					yellow: 'var(--accent-yellow)',
					red: 'var(--accent-red)'
				}
			},
			borderRadius: {
				DEFAULT: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)'
			},
			boxShadow: {
				sm: '0 2px 8px rgba(0,0,0,0.06)',
				md: '0 6px 16px rgba(0,0,0,0.08)',
				lg: '0 12px 28px rgba(0,0,0,0.12)'
			}
		}
	}
}

export default config

