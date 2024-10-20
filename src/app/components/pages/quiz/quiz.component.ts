import { Component } from '@angular/core';
import { BannerTitleComponent } from '../../partials/banner-title/banner-title.component';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../shared/models/quiz';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [BannerTitleComponent, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quiz!: Quiz[];
  quizTitle!: string;
  quizId!: string;

  currentQuestion = 0;
  selectedOptionId: number | null = null;
  userAnswers: { questionId: number; selectedOptionId: number }[] = [];

  score: number = 0; 
  totalQuestions: number = 0; 

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id')!;
    this.quizService.getAllQuiz().subscribe((quizData) => {
      console.log(quizData);

      this.quiz = quizData.filter((quiz) => quiz.id.toString() === this.quizId);

      console.log(`Hello:`, this.quiz);

      this.quizTitle = this.quiz[0].title;
    });
  }

  selectOption(optionId: number) {
    this.selectedOptionId = optionId;
  }

  submitAnswer() {
    if (this.selectedOptionId !== null) {
      // Store the answer with the question id
      this.userAnswers.push({
        questionId: this.quiz[0].questions[this.currentQuestion].id,
        selectedOptionId: this.selectedOptionId,
      });
      this.selectedOptionId = null;
      this.currentQuestion++;
    } else {
      alert('Please select an answer!');
    }
  }

  goBack() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.loadSelectedAnswer();
    }
  }

  loadSelectedAnswer() {
    const previousAnswer = this.userAnswers.find(
      (answer) =>
        answer.questionId === this.quiz[0].questions[this.currentQuestion].id
    );
    if (previousAnswer) {
      this.selectedOptionId = previousAnswer.selectedOptionId;
    } else {
      this.selectedOptionId = null;
    }
  }
}
