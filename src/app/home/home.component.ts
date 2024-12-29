import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  template: ` <app-about></app-about>
              `,         
  //templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

}
