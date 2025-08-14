'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
				secondary:
					'bg-surface text-text-primary border border-border hover:bg-bg-subtle focus-visible:ring-primary-600',
				ghost: 'bg-transparent hover:bg-bg-subtle text-text-primary',
				destructive: 'bg-accent-red text-white hover:opacity-90 focus-visible:ring-accent-red',
			},
			size: {
				sm: 'h-9 px-3 text-sm',
				md: 'h-10 px-4 text-sm',
				lg: 'h-11 px-6 text-base',
			},
		},
		defaultVariants: { variant: 'primary', size: 'md' },
	}
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<button className={cn(buttonVariants({ variant, size }), className)} {...props} />
	)
}

