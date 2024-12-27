import { Component } from '@angular/core';
import { DropdowComponent } from "../dropdow/dropdow.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent, ProjectsComponent],
  template: ` <app-about></app-about>
              <app-contact></app-contact>
              <app-projects></app-projects> `,         
  //templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

}
