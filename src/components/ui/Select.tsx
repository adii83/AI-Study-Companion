type Option = { label: string; value: string }

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
	label?: string
	helperText?: string
	error?: string
	options?: Option[]
}

export function Select({ label, helperText, error, id, options = [], ...props }: SelectProps) {
	const selectId = id ?? `select-${Math.random().toString(36).slice(2, 8)}`
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label htmlFor={selectId} className="text-sm text-text-secondary">
					{label}
				</label>
			)}
			<select
				id={selectId}
				className={`h-10 rounded-md border border-border bg-surface px-3 text-sm focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2`}
				{...props}
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			{(helperText || error) && (
				<p className={`text-xs ${error ? 'text-accent-red' : 'text-text-muted'}`}>{error ?? helperText}</p>
			)}
		</div>
	)
}

