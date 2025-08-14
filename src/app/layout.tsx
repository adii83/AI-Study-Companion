import type { Metadata } from 'next'
import './globals.css'
import { AppShell } from '@/components/layout/AppShell'
import { ThemeProvider } from '@/lib/theme'

export const metadata: Metadata = {
	title: 'AI Study Companion',
	description: 'Belajar cerdas, fokus pada inti.'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="id">
			<body className="antialiased bg-bg text-text-primary">
				<ThemeProvider>
					<AppShell>{children}</AppShell>
				</ThemeProvider>
			</body>
		</html>
	)
}
