import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuizzesComponent } from './components/pages/quizzes/quizzes.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { ResultPageComponent } from './components/pages/result-page/result-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultPageComponent },
  { path: ':category', component: QuizzesComponent },
  { path: ':category/:id', component: QuizComponent }
];
