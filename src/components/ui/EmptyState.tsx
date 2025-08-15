import { LucideIcon } from 'lucide-react'
import { Button } from './Button'

type EmptyStateProps = {
	icon: LucideIcon
	title: string
	description: string
	action?: {
		label: string
		onClick: () => void
	}
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-4 text-center">
			<Icon className="h-12 w-12 text-text-muted mb-4" />
			<h3 className="text-lg font-medium mb-2">{title}</h3>
			<p className="text-text-secondary mb-4 max-w-sm">{description}</p>
			{action && (
				<Button onClick={action.onClick} variant="primary">
					{action.label}
				</Button>
			)}
		</div>
	)
}
