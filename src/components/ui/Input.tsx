import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	helperText?: string
	error?: string
}

export function Input({ label, helperText, error, className, id, ...props }: InputProps) {
	const inputId = id ?? `input-${Math.random().toString(36).slice(2, 8)}`
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label htmlFor={inputId} className="text-sm text-text-secondary">
					{label}
				</label>
			)}
			<input
				id={inputId}
				className={cn(
					'h-10 rounded-md border bg-surface px-3 text-sm outline-none placeholder:text-text-muted',
					error ? 'border-accent-red focus:ring-accent-red' : 'border-border focus:ring-primary-600',
					'focus-visible:ring-2 focus-visible:ring-offset-2',
					className
				)}
				{...props}
			/>
			{(helperText || error) && (
				<p className={cn('text-xs', error ? 'text-accent-red' : 'text-text-muted')}>{error ?? helperText}</p>
			)}
		</div>
	)
}

