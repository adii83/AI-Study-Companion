import { cn } from '@/lib/utils'

export function ChatBubble({ role, children }: { role: 'user' | 'assistant'; children: React.ReactNode }) {
	const isUser = role === 'user'
	return (
		<div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
			<div
				className={cn(
					'max-w-[80%] rounded-lg px-4 py-3 text-sm shadow-sm',
					isUser ? 'bg-primary-600 text-white' : 'bg-surface border border-border text-text-primary'
				)}
			>
				{children}
			</div>
		</div>
	)
}

