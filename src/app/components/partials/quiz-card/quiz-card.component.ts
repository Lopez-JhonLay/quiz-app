import { Component, Input } from '@angular/core';
import { Quiz } from '../../../shared/models/quiz';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  @Input() quizzes: Quiz[] = [];
  @Input() quizTitle!: string;
}
