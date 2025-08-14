import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Select } from '@/components/ui/Select'

export default function SettingsPage() {
	return (
		<div className="flex flex-col gap-4 max-w-xl">
			<h1 className="text-xl font-semibold">Pengaturan</h1>
			<section className="rounded-md border border-border bg-surface p-4 space-y-3">
				<h2 className="font-medium">Provider AI</h2>
				<Select
					label="Provider"
					options={[
						{ label: 'OpenAI (UI Only)', value: 'openai' },
						{ label: 'Ollama (Coming Soon)', value: 'ollama' },
					]}
				/>
			</section>
			<section className="rounded-md border border-border bg-surface p-4 space-y-3">
				<h2 className="font-medium">Tema</h2>
				<ThemeToggle />
			</section>
			<section className="rounded-md border border-border bg-surface p-4 space-y-3">
				<h2 className="font-medium">Data</h2>
				<button className="h-10 px-4 rounded-md border border-border">Reset data lokal</button>
			</section>
		</div>
	)
}

