import { Quiz } from "../app/shared/models/quiz";

export const quizData: Quiz[] = [
  {
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
  },
  {
    id: 2,
    title: 'Science Quiz',
    category: {
      id: 2,
      name: 'Science'
    },
    questions: [
      {
        id: 1,
        text: 'What is the chemical symbol for water?',
        options: [
          { id: 1, text: 'H2O' },
          { id: 2, text: 'CO2' },
          { id: 3, text: 'O2' },
          { id: 4, text: 'NaCl' }
        ],
        correctAnswerId: 1
      },
      {
        id: 2,
        text: 'How many planets are in the solar system?',
        options: [
          { id: 1, text: '7' },
          { id: 2, text: '8' },
          { id: 3, text: '9' },
          { id: 4, text: '10' }
        ],
        correctAnswerId: 2
      }
    ]
  },
  {
    id: 3,
    title: 'History Quiz',
    category: {
      id: 3,
      name: 'History'
    },
    questions: [
      {
        id: 1,
        text: 'Who was the first President of the United States?',
        options: [
          { id: 1, text: 'George Washington' },
          { id: 2, text: 'Thomas Jefferson' },
          { id: 3, text: 'Abraham Lincoln' },
          { id: 4, text: 'John Adams' }
        ],
        correctAnswerId: 1
      },
      {
        id: 2,
        text: 'In which year did World War II end?',
        options: [
          { id: 1, text: '1943' },
          { id: 2, text: '1945' },
          { id: 3, text: '1947' },
          { id: 4, text: '1950' }
        ],
        correctAnswerId: 2
      }
    ]
  },
  {
    id: 4,
    title: 'Mathematics Quiz',
    category: {
      id: 4,
      name: 'Mathematics'
    },
    questions: [
      {
        id: 1,
        text: 'What is 5 + 7?',
        options: [
          { id: 1, text: '11' },
          { id: 2, text: '12' },
          { id: 3, text: '13' },
          { id: 4, text: '14' }
        ],
        correctAnswerId: 2
      },
      {
        id: 2,
        text: 'What is the square root of 64?',
        options: [
          { id: 1, text: '6' },
          { id: 2, text: '7' },
          { id: 3, text: '8' },
          { id: 4, text: '9' }
        ],
        correctAnswerId: 3
      }
    ]
  },
  {
    id: 5,
    title: 'Geography Quiz',
    category: {
      id: 5,
      name: 'Geography'
    },
    questions: [
      {
        id: 1,
        text: 'Which is the largest continent?',
        options: [
          { id: 1, text: 'Africa' },
          { id: 2, text: 'Asia' },
          { id: 3, text: 'Europe' },
          { id: 4, text: 'North America' }
        ],
        correctAnswerId: 2
      },
      {
        id: 2,
        text: 'What is the longest river in the world?',
        options: [
          { id: 1, text: 'Nile' },
          { id: 2, text: 'Amazon' },
          { id: 3, text: 'Yangtze' },
          { id: 4, text: 'Mississippi' }
        ],
        correctAnswerId: 1
      }
    ]
  }
];
