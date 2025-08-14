export function Modal({ open, title, children, onClose }: { open: boolean; title?: string; children: React.ReactNode; onClose: () => void }) {
	if (!open) return null
	return (
		<div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
			<div className="w-full max-w-lg rounded-md border border-border bg-surface shadow-md">
				<div className="px-5 py-3 border-b border-border font-medium">{title}</div>
				<div className="px-5 py-4">{children}</div>
				<div className="px-5 py-3 border-t border-border text-right">
					<button className="h-10 px-4 rounded-md border border-border" onClick={onClose}>
						Tutup
					</button>
				</div>
			</div>
		</div>
	)
}

