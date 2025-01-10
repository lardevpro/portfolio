import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingComponent } from './training/training.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact', component : AboutComponent},
    {path: 'projects', component : ProjectsComponent},
    {path: 'training', component :TrainingComponent},
    {path: 'experience', component :ExperienceComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];