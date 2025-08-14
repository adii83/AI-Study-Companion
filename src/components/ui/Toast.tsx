"use client"
import { useEffect, useState } from 'react'

export function Toast({ message, open, onOpenChange }: { message: string; open: boolean; onOpenChange: (o: boolean) => void }) {
	useEffect(() => {
		if (!open) return
		const t = setTimeout(() => onOpenChange(false), 3000)
		return () => clearTimeout(t)
	}, [open, onOpenChange])

	if (!open) return null
	return (
		<div className="fixed bottom-20 left-1/2 -translate-x-1/2 rounded-md bg-surface border border-border shadow-md px-4 py-2 text-sm">
			{message}
		</div>
	)
}

