"use client"
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function SummarizePage() {
	const [text, setText] = useState('')
	const [result, setResult] = useState<string | null>(null)

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
					<div className="mt-4">
						<Button variant="secondary">Generate Flashcards</Button>
					</div>
				</div>
			)}
		</div>
	)
}

