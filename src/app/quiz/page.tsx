"use client"
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function QuizPage() {
	const [started, setStarted] = useState(false)
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Kuis</h1>
			{!started ? (
				<form
					onSubmit={(e) => {
						e.preventDefault()
						setStarted(true)
					}}
					className="grid gap-3 max-w-md"
				>
					<label className="text-sm text-text-secondary">Jumlah Soal</label>
					<input className="h-10 rounded-md border border-border bg-surface px-3 text-sm" defaultValue={10} />
					<label className="text-sm text-text-secondary">Tingkat</label>
					<select className="h-10 rounded-md border border-border bg-surface px-3 text-sm">
						<option>Mudah</option>
						<option>Menengah</option>
						<option>Sulit</option>
					</select>
					<Button type="submit">Mulai</Button>
				</form>
			) : (
				<div className="max-w-xl rounded-md border border-border bg-surface p-4">
					<div className="font-medium mb-2">1. Apa ibu kota Indonesia?</div>
					<div className="grid gap-2">
						<label className="flex items-center gap-2"><input type="radio" name="q1" /> Surabaya</label>
						<label className="flex items-center gap-2"><input type="radio" name="q1" /> Jakarta</label>
						<label className="flex items-center gap-2"><input type="radio" name="q1" /> Bandung</label>
					</div>
					<div className="mt-3"><Button>Selesai</Button></div>
				</div>
			)}
		</div>
	)
}

