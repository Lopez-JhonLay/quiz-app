import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { quizData } from '../../assets/data';
import { Quiz } from '../shared/models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getAllCategories(): Observable<Quiz> {
    return of(quizData);
  }
}
