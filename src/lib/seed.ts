import { Flashcard, QuizQuestion } from './types'

export const seedFlashcards: Flashcard[] = [
	{ id: 'fc1', subject: 'Matematika', front: 'Apa itu limit?', back: 'Nilai yang didekati fungsi saat variabel mendekati nilai tertentu.', tags: ['kalkulus'], EF: 2.5, intervalDays: 0, repetitions: 0 },
	{ id: 'fc2', subject: 'Biologi', front: 'Definisi fotosintesis', back: 'Proses tumbuhan mengubah energi cahaya menjadi energi kimia (glukosa).', tags: ['sel'], EF: 2.5, intervalDays: 0, repetitions: 0 },
	{ id: 'fc3', subject: 'Sejarah', front: 'Tahun Proklamasi Indonesia', back: '1945', tags: ['indonesia'], EF: 2.5, intervalDays: 0, repetitions: 0 },
]

export const seedQuestions: QuizQuestion[] = [
	{ id: 'q1', subject: 'Sejarah', question: 'Siapa yang membacakan Proklamasi?', choices: ['Soekarno', 'Hatta', 'Soedirman', 'Tan Malaka'], answerIndex: 0, explanation: 'Naskah dibacakan oleh Ir. Soekarno didampingi Moh. Hatta.' },
	{ id: 'q2', subject: 'Matematika', question: 'lim x→0 sin x / x = ?', choices: ['0', '1', '∞', 'Tidak ada'], answerIndex: 1, explanation: 'Batas standar kalkulus.' },
]

