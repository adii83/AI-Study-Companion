import { create } from 'zustand'
import { Flashcard, QuizQuestion, StudyStats } from './types'
import { seedFlashcards, seedQuestions } from './seed'

type PreferencesState = {
	theme: 'light' | 'dark'
	language: 'id' | 'en'
	setTheme: (t: 'light' | 'dark') => void
	setLanguage: (l: 'id' | 'en') => void
}

type FlashcardState = {
	cards: Flashcard[]
	filter: 'all' | 'due' | 'unmastered'
	review: (id: string, rating: 1 | 2 | 3) => void
	setFilter: (f: FlashcardState['filter']) => void
}

type QuizState = {
	questions: QuizQuestion[]
	lastScore?: string
	setLastScore: (s: string) => void
}

type StatsState = {
	stats: StudyStats
	incMinutes: (m: number) => void
}

function now() { return Date.now() }

export const usePreferencesStore = create<PreferencesState>((set) => ({
	theme: 'light',
	language: 'id',
	setTheme: (theme) => set({ theme }),
	setLanguage: (language) => set({ language }),
}))

// SRS sederhana (SM-2 ringkas)
export const useFlashcardStore = create<FlashcardState>((set, get) => ({
	cards: seedFlashcards,
	filter: 'all',
	setFilter: (f) => set({ filter: f }),
	review: (id, rating) => {
		const q = get().cards.map((c) => {
			if (c.id !== id) return c
			const quality = rating // 1 sulit, 2 biasa, 3 mudah
			const EF = Math.max(1.3, (c.EF ?? 2.5) + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)))
			const repetitions = (c.repetitions ?? 0) + 1
			const interval = repetitions === 1 ? 1 : repetitions === 2 ? 6 : Math.round(((c.intervalDays ?? 1) * EF))
			return { ...c, EF, repetitions, intervalDays: interval, dueAt: now() + interval * 86400000 }
		})
		set({ cards: q })
	},
}))

export const useQuizStore = create<QuizState>((set) => ({
	questions: seedQuestions,
	setLastScore: (s) => set({ lastScore: s }),
}))

export const useStatsStore = create<StatsState>((set) => ({
	stats: { streakDays: 3, minutesThisWeek: 120, cardsDueToday: 5, lastQuizScore: '7/10' },
	incMinutes: (m) => set((s) => ({ stats: { ...s.stats, minutesThisWeek: s.stats.minutesThisWeek + m } })),
}))

