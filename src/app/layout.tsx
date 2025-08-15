import type { Metadata } from 'next'
import './globals.css'
import { AppShell } from '@/components/layout/AppShell'
import { ThemeProvider } from '@/lib/theme'

export const viewport = {
	width: 'device-width',
	initialScale: 1,
}

export const metadata: Metadata = {
	title: 'AI Study Companion',
	description: 'Belajar cerdas, fokus pada inti. Rangkum materi, buat flashcards, dan kuis adaptif untuk mempercepat pemahaman.',
	keywords: ['AI', 'belajar', 'rangkuman', 'flashcards', 'kuis', 'pendidikan'],
	authors: [{ name: 'AI Study Companion Team' }],
	robots: 'index, follow',
	openGraph: {
		title: 'AI Study Companion',
		description: 'Belajar cerdas, fokus pada inti.',
		type: 'website',
		locale: 'id_ID'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'AI Study Companion',
		description: 'Belajar cerdas, fokus pada inti.'
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="id" suppressHydrationWarning>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							try {
								const theme = localStorage.getItem('theme') || 
									(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
								document.documentElement.classList.toggle('dark', theme === 'dark');
							} catch (e) {}
						`,
					}}
				/>
			</head>
			<body className="antialiased bg-bg text-text-primary" suppressHydrationWarning>
				<ThemeProvider>
					<AppShell>{children}</AppShell>
				</ThemeProvider>
			</body>
		</html>
	)
}
