'use client'

import { Button } from '@/components/ui/Button'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { useFlashcardStore } from '@/lib/store'

export default function FlashcardsPage() {
	const { cards, setFilter, filter, review } = useFlashcardStore()
	const due = cards.filter((c) => (c.dueAt ?? 0) <= Date.now())
	const learned = cards.length - due.length
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Flashcards</h1>
				<div className="flex items-center gap-3">
					<ProgressRing value={cards.length ? Math.round((learned / cards.length) * 100) : 0} />
					<span className="text-sm text-text-secondary">{learned} / {cards.length} dipahami</span>
				</div>
			</div>
			<div className="flex gap-2 flex-wrap">
				<Button variant={filter==='unmastered'?'primary':'secondary'} onClick={() => setFilter('unmastered')}>Belum paham</Button>
				<Button variant={filter==='due'?'primary':'secondary'} onClick={() => setFilter('due')}>Due hari ini</Button>
				<Button variant={filter==='all'?'primary':'secondary'} onClick={() => setFilter('all')}>Semua</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{(filter==='all' ? cards : filter==='due' ? due : cards).map((c) => (
					<div key={c.id} className="rounded-md border border-border bg-surface p-4">
						<div className="font-medium mb-2">{c.front}</div>
						<p className="text-sm text-text-secondary">{c.back}</p>
						<div className="mt-3 flex gap-2">
							<Button variant="secondary" size="sm" onClick={() => review(c.id, 1)}>Ulang</Button>
							<Button size="sm" onClick={() => review(c.id, 3)}>Paham</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

