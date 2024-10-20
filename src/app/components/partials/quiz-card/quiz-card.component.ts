import { Component, Input } from '@angular/core';
import { Quiz } from '../../../shared/models/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  @Input() quizId!: number;
  @Input() quizCategory!: string;
  @Input() quizTitle!: string;

  constructor(private router: Router) { }

  navigateToQuiz(category: string, id: number): void {
    this.router.navigate([`/${category}/${id}`]);
  }
}
