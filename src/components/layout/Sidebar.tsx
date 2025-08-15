'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MessageSquare, FileText, Layers3, HelpCircle, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [
	{ href: '/', label: 'Home', icon: Home },
	{ href: '/chat', label: 'Chat', icon: MessageSquare },
	{ href: '/summarize', label: 'Summary', icon: FileText },
	{ href: '/flashcards', label: 'Flashcards', icon: Layers3 },
	{ href: '/quiz', label: 'Quiz', icon: HelpCircle },
	{ href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
	const pathname = usePathname()
	return (
		<nav className="hidden md:flex w-56 h-[calc(100vh-56px)] sticky top-14 border-r border-border bg-surface">
			<ul className="w-full p-2">
				{nav.map((item) => {
					const Icon = item.icon
					const active = pathname === item.href
					return (
						<li key={item.href}>
							<Link
								className={cn(
									'flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-bg-subtle transition-colors',
									active && 'bg-bg-subtle text-primary-600 font-medium'
								)}
								aria-current={active ? 'page' : undefined}
								href={item.href}
							>
								<Icon className="h-4 w-4" aria-hidden="true" />
								<span>{item.label}</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

