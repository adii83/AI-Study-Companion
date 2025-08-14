import { create } from 'zustand'

type PreferencesState = {
	theme: 'light' | 'dark'
	language: 'id' | 'en'
	setTheme: (t: 'light' | 'dark') => void
	setLanguage: (l: 'id' | 'en') => void
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
	theme: 'light',
	language: 'id',
	setTheme: (theme) => set({ theme }),
	setLanguage: (language) => set({ language }),
}))

