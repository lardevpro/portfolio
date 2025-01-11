import { Component, OnInit } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { TrainingComponent } from "./training/training.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeService } from './services/home.service';
import { About } from './services/models/about';



@Component({
  selector: 'app-home',
  imports: [AboutComponent, ProjectsComponent, ExperienceComponent, TrainingComponent, FooterComponent],
  template: ` <app-about [about]="about"></app-about>
              <app-experience></app-experience>
              <app-training></app-training>
              <app-projects><app-projects>
              <app-footer></app-footer>
              `,         
  //templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  providers: [HomeService]
})



export class HomeComponent implements OnInit {

  about: About = new About();

  constructor(private service: HomeService) {}


  ngOnInit(): void {
    this.about = this.service.getAboutModel();

  }
}
