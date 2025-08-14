import { Button } from '@/components/ui/Button'
import { ProgressRing } from '@/components/ui/ProgressRing'

export default function FlashcardsPage() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Flashcards</h1>
				<div className="flex items-center gap-3">
					<ProgressRing value={43} />
					<span className="text-sm text-text-secondary">12 / 28 dipahami</span>
				</div>
			</div>
			<div className="flex gap-2">
				<Button variant="secondary">Belum paham</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="rounded-md border border-border bg-surface p-4">
						<div className="font-medium mb-2">Apa itu fotosintesis?</div>
						<p className="text-sm text-text-secondary">Proses tumbuhan mengubah cahaya menjadi energi kimia.</p>
						<div className="mt-3 flex gap-2">
							<Button variant="secondary" size="sm">Ulang</Button>
							<Button size="sm">Paham</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

