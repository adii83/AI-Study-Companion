'use client'

import { ChatBubble } from '@/components/domain/ChatBubble'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { MessageSquare } from 'lucide-react'
import { useState } from 'react'

type Message = {
	role: 'user' | 'assistant'
	content: string
}

export default function ChatPage() {
	const [messages, setMessages] = useState<Message[]>([
		{ role: 'assistant', content: 'Halo! Bagaimana aku bisa membantu belajarmu hari ini?' },
	])
	const [input, setInput] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!input.trim()) return
		setMessages(prev => [...prev, 
			{ role: 'user', content: input },
			{ role: 'assistant', content: 'Ini jawaban AI (demo). Dalam implementasi nyata, akan terhubung ke API AI.' }
		])
		setInput('')
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Chat</h1>
				<div className="flex gap-2">
					<Button variant="ghost" size="sm">Tutor Socratic</Button>
					<Button variant="ghost" size="sm">Pembuat Contoh</Button>
				</div>
			</div>
			<div className="min-h-[50vh] border border-border rounded-md bg-surface p-4 flex flex-col gap-3">
				{messages.length === 0 ? (
					<EmptyState
						icon={MessageSquare}
						title="Mulai percakapan"
						description="Tanya apa saja tentang materi belajar. AI akan membantu dengan penjelasan step-by-step."
						action={{ label: 'Contoh: Jelaskan fotosintesis', onClick: () => setInput('Jelaskan fotosintesis secara sederhana') }}
					/>
				) : (
					messages.map((msg, i) => (
						<div key={i} className="flex gap-2">
							<ChatBubble role={msg.role}>{msg.content}</ChatBubble>
							{msg.role === 'assistant' && (
								<div className="flex flex-col gap-1">
									<Button variant="ghost" size="sm" className="text-xs">→ Kartu</Button>
									<Button variant="ghost" size="sm" className="text-xs">→ Kuis</Button>
								</div>
							)}
						</div>
					))
				)}
			</div>
			<div className="sticky bottom-20 md:bottom-0 bg-bg p-2 border-t border-border">
				<div className="flex flex-wrap gap-2 mb-2">
					<Button variant="secondary" size="sm" onClick={() => setInput(input + ' (jelaskan langkah demi langkah)')}>Langkah demi langkah</Button>
					<Button variant="secondary" size="sm" onClick={() => setInput(input + ' (berikan contoh soal)')}>Contoh soal</Button>
					<Button variant="secondary" size="sm" onClick={() => setInput(input + ' (ringkas dalam 3 poin)')}>Ringkas jawaban</Button>
				</div>
				<form onSubmit={handleSubmit} className="flex gap-2">
					<input 
						value={input} 
						onChange={(e) => setInput(e.target.value)}
						className="flex-1 h-11 rounded-md border border-border bg-surface px-3 text-sm" 
						placeholder="Tulis pertanyaan..." 
						aria-label="Prompt" 
					/>
					<Button type="submit">Kirim</Button>
				</form>
			</div>
		</div>
	)
}

