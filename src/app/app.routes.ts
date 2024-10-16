import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuizzesComponent } from './components/pages/quizzes/quizzes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':category', component: QuizzesComponent }
];
