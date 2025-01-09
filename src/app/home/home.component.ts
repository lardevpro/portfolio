import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { TrainingComponent } from "../training/training.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ProjectsComponent, ExperienceComponent, TrainingComponent, CarouselComponent],
  template: ` <app-about></app-about>
              <app-carousel></app-carousel>
              <app-experience></app-experience>
              <app-training></app-training>
              <app-projects><app-projects>
              `,         
  //templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

}
