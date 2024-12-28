import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent implements AfterViewInit {


  ngAfterViewInit() {
    const img = document.querySelector('.personal-image img') as HTMLImageElement;
    if (img) {
      img.addEventListener('load', () => {
        img.classList.add('lazy-load');
      });
    }
  }
}
