import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  title : string = 'Portfolio';
  name : string = 'Juan Gabriel Lara';
  
    date(): number {
      return new Date().getFullYear();
    }
}
