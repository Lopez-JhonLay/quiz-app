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
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  quiz!: Quiz[]; // Holds the quiz data
  quizTitle!: string; // Holds the title of the quiz
  quizId!: string; // Holds the quiz ID

  currentQuestion = 0; // Current question index
  selectedOptionId: number | null = null; // Tracks the selected option ID
  userAnswers: { questionId: number; selectedOptionId: number }[] = []; // Stores user answers

  score: number = 0; // User's score
  totalQuestions: number = 0; // Total number of questions in the quiz
  quizCompleted: boolean = false; // Track if the quiz is completed

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
      this.totalQuestions = this.quiz[0].questions.length; // Set total questions
    });
  }

  selectOption(optionId: number) {
    this.selectedOptionId = optionId; // Set the selected option ID
  }

  submitAnswer() {
    if (this.selectedOptionId !== null) {
      // Store the answer with the question ID
      this.userAnswers.push({
        questionId: this.quiz[0].questions[this.currentQuestion].id,
        selectedOptionId: this.selectedOptionId,
      });

      // Check if this is the last question
      if (this.currentQuestion === this.totalQuestions - 1) {
        this.calculateScore(); // Calculate score when the last question is answered
        this.quizCompleted = true; // Mark quiz as completed
      } else {
        this.currentQuestion++; // Move to the next question
      }

      this.selectedOptionId = null; // Reset selected option for the next question
    } else {
      alert('Please select an answer!'); // Alert if no answer is selected
    }
  }

  goBack() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--; // Move to the previous question
      this.loadSelectedAnswer(); // Load the selected answer
    }
  }

  loadSelectedAnswer() {
    const previousAnswer = this.userAnswers.find(
      (answer) =>
        answer.questionId === this.quiz[0].questions[this.currentQuestion].id
    );
    if (previousAnswer) {
      this.selectedOptionId = previousAnswer.selectedOptionId; // Set selected option if it exists
    } else {
      this.selectedOptionId = null; // No previous answer
    }
  }

  calculateScore() {
    this.score = this.userAnswers.reduce((total, answer) => {
      const question = this.quiz[0].questions.find(q => q.id === answer.questionId);
      return total + (question && question.correctAnswerId === answer.selectedOptionId ? 1 : 0); // Count correct answers
    }, 0);
    
    // Display the score (alert is optional)
    alert(`Your score is ${this.score} out of ${this.totalQuestions}`);
  }
}
