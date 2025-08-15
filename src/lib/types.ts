export type Subject = 'Matematika' | 'Biologi' | 'Sejarah' | 'Lainnya'

export type Flashcard = {
	id: string
	front: string
	back: string
	subject: Subject
	tags?: string[]
	intervalDays?: number
	EF?: number
	dueAt?: number
	repetitions?: number
}

export type QuizQuestion = {
	id: string
	question: string
	choices: string[]
	answerIndex: number
	explanation?: string
	subject?: Subject
}

export type StudyStats = {
	streakDays: number
	minutesThisWeek: number
	cardsDueToday: number
	lastQuizScore?: string
}

