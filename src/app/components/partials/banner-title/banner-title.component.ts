import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  standalone: true,
  imports: [],
  templateUrl: './banner-title.component.html',
  styleUrl: './banner-title.component.css'
})
export class BannerTitleComponent {
  @Input() bannerTitle!: string;
}
