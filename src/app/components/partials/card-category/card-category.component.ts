import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../shared/models/quiz';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent implements OnInit{
  @Input() category!: Category;

  ngOnInit(): void {
    console.log(this.category.name);
    
  }
}
