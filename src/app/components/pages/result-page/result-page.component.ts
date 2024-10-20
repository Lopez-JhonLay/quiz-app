import { Component } from '@angular/core';
import { BannerTitleComponent } from '../../partials/banner-title/banner-title.component';
import { ResultCardComponent } from '../../partials/result-card/result-card.component';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    BannerTitleComponent,
    ResultCardComponent
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {

}
