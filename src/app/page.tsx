'use client'

import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { useStatsStore, useFlashcardStore, useQuizStore } from '@/lib/store'

export default function Home() {
	const { stats } = useStatsStore()
	const { cards } = useFlashcardStore()
	const due = cards.filter((c) => (c.dueAt ?? 0) <= Date.now()).length
	const { lastScore } = useQuizStore()

	return (
		<div className="space-y-6">
			<section className="rounded-lg p-8 text-white shadow-md" style={{ background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))' }}>
				<h1 className="text-2xl md:text-3xl font-semibold">Belajar cerdas, fokus pada inti.</h1>
				<p className="mt-2 text-white/90 max-w-2xl">Rangkum materi, buat flashcards, dan kuis adaptif untuk mempercepat pemahaman.</p>
				<div className="mt-4">
					<Button variant="secondary" className="bg-white text-slate-900 hover:bg-gray-100 hover:text-slate-900">Mulai Rangkuman</Button>
				</div>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				<Card>
					<CardBody>
						<h3 className="font-medium mb-2">Ringkasan Progres</h3>
						<ul className="list-disc pl-5 text-sm text-text-secondary space-y-1">
							<li>Streak belajar: {stats.streakDays} hari</li>
							<li>Waktu minggu ini: {stats.minutesThisWeek} menit</li>
							<li>Kartu due hari ini: {due}</li>
						</ul>
						<div className="mt-3"><Button variant="secondary" size="sm">Lanjutkan</Button></div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<h3 className="font-medium mb-2">Flashcards Aktif</h3>
						<p className="text-2xl font-semibold">{Math.max(0, cards.length - due)} / {cards.length} dipahami</p>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<h3 className="font-medium mb-2">Kuis Terakhir</h3>
						<p className="text-lg">Skor {lastScore ?? '—'}</p>
						<div className="mt-3"><Button variant="secondary" size="sm">Lihat pembahasan</Button></div>
					</CardBody>
				</Card>
			</section>
		</div>
	)
}
