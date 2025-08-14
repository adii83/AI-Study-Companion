'use client'

import Link from 'next/link'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

export function AppShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-bg text-text-primary">
			<header className="sticky top-0 z-30 border-b border-border bg-surface/80 backdrop-blur-sm">
				<div className="mx-auto max-w-[1200px] px-4 md:px-6 h-14 flex items-center justify-between">
					<Link href="/" className="font-semibold tracking-tight">
						AI Study Companion
					</Link>
					<div className="flex items-center gap-2">
						<ThemeToggle />
					</div>
				</div>
			</header>
			<div className="mx-auto max-w-[1200px] px-4 md:px-6 flex gap-6">
				<aside className="hidden md:flex">
					<Sidebar />
				</aside>
				<main className={cn('flex-1 pb-20 md:pb-8 pt-6')}>{children}</main>
			</div>
			<BottomNav />
		</div>
	)
}

