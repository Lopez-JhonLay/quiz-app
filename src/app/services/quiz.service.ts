import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { quizData } from '../../assets/data';
import { Quiz } from '../shared/models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  userScore = 0;
  totalQuestions = 0;

  constructor() { }

  getAllQuiz(): Observable<Quiz[]> {
    return of(quizData);
  }
}
