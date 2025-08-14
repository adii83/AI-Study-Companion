import { ChatBubble } from '@/components/domain/ChatBubble'
import { Button } from '@/components/ui/Button'

export default function ChatPage() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Chat</h1>
			<div className="min-h-[50vh] border border-border rounded-md bg-surface p-4 flex flex-col gap-3">
				<ChatBubble role="assistant">Halo! Bagaimana aku bisa membantu belajarmu hari ini?</ChatBubble>
				<ChatBubble role="user">Jelaskan konsep limit secara singkat.</ChatBubble>
			</div>
			<div className="sticky bottom-20 md:bottom-0 bg-bg p-2 border-t border-border">
				<div className="flex flex-wrap gap-2 mb-2">
					<Button variant="secondary" size="sm">Langkah demi langkah</Button>
					<Button variant="secondary" size="sm">Contoh soal</Button>
					<Button variant="secondary" size="sm">Ringkas jawaban</Button>
				</div>
				<form className="flex gap-2">
					<input className="flex-1 h-11 rounded-md border border-border bg-surface px-3 text-sm" placeholder="Tulis pertanyaan..." aria-label="Prompt" />
					<Button type="submit">Kirim</Button>
				</form>
			</div>
		</div>
	)
}

