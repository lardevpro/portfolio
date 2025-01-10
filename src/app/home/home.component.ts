import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { TrainingComponent } from "../training/training.component";
import { FooterComponent } from "../footer/footer.component";



@Component({
  selector: 'app-home',
  imports: [AboutComponent, ProjectsComponent, ExperienceComponent, TrainingComponent, FooterComponent],
  template: ` <app-about></app-about>
              <app-experience></app-experience>
              <app-training></app-training>
              <app-projects><app-projects>
              <app-footer></app-footer>
              `,         
  //templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

}
