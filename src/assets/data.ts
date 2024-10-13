import { Quiz } from "../app/shared/models/quiz";

export const quizData: Quiz = {
  id: 1,
  title: 'General Knowledge Quiz',
  category: {
    id: 1,
    name: 'General Knowledge'
  },
  questions: [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: [
        { id: 1, text: 'Paris' },
        { id: 2, text: 'London' },
        { id: 3, text: 'Berlin' },
        { id: 4, text: 'Madrid' }
      ],
      correctAnswerId: 1
    },
    {
      id: 2,
      text: 'Which planet is known as the Red Planet?',
      options: [
        { id: 1, text: 'Earth' },
        { id: 2, text: 'Venus' },
        { id: 3, text: 'Mars' },
        { id: 4, text: 'Jupiter' }
      ],
      correctAnswerId: 3
    }
  ]
};