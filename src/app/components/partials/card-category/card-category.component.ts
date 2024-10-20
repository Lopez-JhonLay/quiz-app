import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  @Input() category!: string;

  constructor(private router: Router) { }

  navigateToCategory(category: string): void {
    this.router.navigate([`/${category}`]);
  }
}
