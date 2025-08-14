"use client"
import { useState } from 'react'

type Tab = { id: string; label: string; content: React.ReactNode }

export function Tabs({ tabs, defaultTab }: { tabs: Tab[]; defaultTab?: string }) {
	const [active, setActive] = useState<string>(defaultTab ?? tabs[0]?.id)
	return (
		<div>
			<div role="tablist" aria-label="Tabs" className="flex gap-2 border-b border-border">
				{tabs.map((t) => (
					<button
						key={t.id}
						role="tab"
						aria-selected={active === t.id}
						className={`px-3 h-10 text-sm ${active === t.id ? 'border-b-2 border-primary-600 text-text-primary' : 'text-text-secondary'}`}
						onClick={() => setActive(t.id)}
					>
						{t.label}
					</button>
				))}
			</div>
			<div className="pt-4" role="tabpanel">
				{tabs.find((t) => t.id === active)?.content}
			</div>
		</div>
	)
}

