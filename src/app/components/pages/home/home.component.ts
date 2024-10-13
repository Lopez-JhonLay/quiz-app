import { Component, OnInit } from '@angular/core';
import { CardCategoryComponent } from '../../partials/card-category/card-category.component';
import { Category } from '../../../shared/models/quiz';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardCategoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: Category[] = []

  constructor (private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe((quizData) => {
      this.categories = quizData.map(quiz => quiz.category);
    })
  }
}
