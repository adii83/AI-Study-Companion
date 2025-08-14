type Props = { value: number; size?: number; stroke?: number }

export function ProgressRing({ value, size = 56, stroke = 6 }: Props) {
	const radius = (size - stroke) / 2
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (value / 100) * circumference
	return (
		<svg width={size} height={size} role="img" aria-label={`Progress ${value}%`}>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke="var(--border)"
				strokeWidth={stroke}
				fill="transparent"
			/>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke="var(--primary-600)"
				strokeWidth={stroke}
				fill="transparent"
				strokeDasharray={`${circumference} ${circumference}`}
				strokeDashoffset={offset}
				strokeLinecap="round"
			/>
		</svg>
	)
}

