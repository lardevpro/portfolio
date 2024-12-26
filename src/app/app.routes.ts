import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact', component : AboutComponent},
    {path: 'projects', component : ProjectsComponent},
    {path: 'cv', component :CvComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];