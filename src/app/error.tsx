'use client'

import { Button } from '@/components/ui/Button'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
			<h2 className="text-lg font-medium">Terjadi kesalahan!</h2>
			<p className="text-text-secondary">{error.message}</p>
			<Button onClick={reset}>Coba lagi</Button>
		</div>
	)
}
