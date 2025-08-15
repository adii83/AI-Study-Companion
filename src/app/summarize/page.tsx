"use client"
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { useFlashcardStore } from '@/lib/store'

export default function SummarizePage() {
	const [text, setText] = useState('')
	const [result, setResult] = useState<string | null>(null)
	const [options, setOptions] = useState({ length: 'medium', level: 'sma', style: 'formal' })
	const { cards } = useFlashcardStore()

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Rangkuman</h1>
			{!result ? (
				<form
					onSubmit={(e) => {
						e.preventDefault()
						setResult('Ini TL;DR ≤120 kata. 1) Poin penting pertama. 2) Poin penting kedua. 3) Poin penting ketiga.')
					}}
					className="border border-border rounded-md bg-surface p-4 flex flex-col gap-3"
				>
					<label htmlFor="paste" className="text-sm text-text-secondary">
						Tempel teks materi di sini
					</label>
					<textarea id="paste" className="min-h-[160px] rounded-md border border-border bg-surface p-3 text-sm" value={text} onChange={(e) => setText(e.target.value)} />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
						<div>
							<label className="text-xs text-text-secondary">Panjang</label>
							<select value={options.length} onChange={(e) => setOptions(o => ({...o, length: e.target.value}))} className="w-full h-10 rounded-md border border-border bg-surface px-3 text-sm">
								<option value="short">Singkat (≤60 kata)</option>
								<option value="medium">Medium (≤120 kata)</option>
								<option value="long">Panjang (≤200 kata)</option>
							</select>
						</div>
						<div>
							<label className="text-xs text-text-secondary">Level</label>
							<select value={options.level} onChange={(e) => setOptions(o => ({...o, level: e.target.value}))} className="w-full h-10 rounded-md border border-border bg-surface px-3 text-sm">
								<option value="smp">SMP</option>
								<option value="sma">SMA</option>
								<option value="kuliah">Kuliah</option>
							</select>
						</div>
						<div>
							<label className="text-xs text-text-secondary">Gaya</label>
							<select value={options.style} onChange={(e) => setOptions(o => ({...o, style: e.target.value}))} className="w-full h-10 rounded-md border border-border bg-surface px-3 text-sm">
								<option value="formal">Formal</option>
								<option value="santai">Santai</option>
								<option value="poin">Bullet Points</option>
							</select>
						</div>
					</div>
					<Button type="submit" variant="primary" className="self-start">Ringkas</Button>
				</form>
			) : (
				<div className="border border-border rounded-md bg-surface p-4">
					<p className="mb-3">{result}</p>
					<ul className="list-disc pl-5 text-sm text-text-secondary space-y-1">
						<li>Poin 1</li>
						<li>Poin 2</li>
						<li>Poin 3</li>
					</ul>
					<div className="mt-4 flex flex-wrap gap-2">
						<Button variant="secondary">Generate Flashcards</Button>
						<Button variant="ghost">Ekspor Markdown</Button>
						<Button variant="ghost">Ekspor PDF</Button>
						<Button variant="ghost" onClick={() => setResult(null)}>Ringkas Ulang</Button>
					</div>
					<p className="text-xs text-text-muted mt-2">Saat ini ada {cards.length} kartu. Fitur generate akan menambah dari poin kunci.</p>
				</div>
			)}
		</div>
	)
}

