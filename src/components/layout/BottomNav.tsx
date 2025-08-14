'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MessageSquare, FileText, Layers3, HelpCircle } from 'lucide-react'

const items = [
	{ href: '/', label: 'Home', icon: Home },
	{ href: '/chat', label: 'Chat', icon: MessageSquare },
	{ href: '/summarize', label: 'Summary', icon: FileText },
	{ href: '/flashcards', label: 'Cards', icon: Layers3 },
	{ href: '/quiz', label: 'Quiz', icon: HelpCircle },
]

export function BottomNav() {
	const pathname = usePathname()
	return (
		<nav className="md:hidden fixed bottom-0 inset-x-0 border-t border-border bg-surface z-40">
			<ul className="grid grid-cols-5">
				{items.map(({ href, label, icon: Icon }) => {
					const active = pathname === href
					return (
						<li key={href}>
							<Link
								aria-label={label}
								aria-current={active ? 'page' : undefined}
								href={href}
								className="flex h-14 items-center justify-center gap-1 text-xs"
							>
								<Icon className="h-5 w-5" aria-hidden="true" />
								<span>{label}</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

