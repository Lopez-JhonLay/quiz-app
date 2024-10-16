import { Component } from '@angular/core';
import { Quiz } from '../../../shared/models/quiz';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { BannerTitleComponent } from '../../partials/banner-title/banner-title.component';
import { QuizCardComponent } from '../../partials/quiz-card/quiz-card.component';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [
    BannerTitleComponent,
    QuizCardComponent
  ],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css',
})
export class QuizzesComponent {
  quizzes: Quiz[] = [];
  category: string = '';

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe((quizData) => {
      this.category = this.route.snapshot.paramMap.get('category')!;
      this.quizzes = quizData.filter(
        (quiz) => quiz.category.name === this.category
      );
      console.log(this.quizzes);
    });
  }
}
