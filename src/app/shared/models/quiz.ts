export type Quiz = {
  id: number;
  title: string;
  category: Category;
  questions: Question[];
}

export type Category = {
  id: number;
  name: string;
}

export type Question = {
  id: number;
  text: string;
  options: Answer[];
  correctAnswerId: number;
}

export type Answer = {
  id: number;
  text: string;
}
