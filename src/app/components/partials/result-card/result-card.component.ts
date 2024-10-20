import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent implements OnInit {
  userScore!: number;
  totalQuestions!: number;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.userScore = this.quizService.userScore;
    this.totalQuestions = this.quizService.totalQuestions;
  }
}
