import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  imgUrl: string;
  tittle: string;
  description: string;
  projectUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
})
export class ProjectsComponent  {

  cards: Card[] = [
    {
      imgUrl: '/assets/images/angular.png',
      tittle: 'OPPO Community',
      description: 'Dando apollo en el proyecto OPPO Community con Angular framework.',
      projectUrl: '',
  },
  {
    imgUrl: '/assets/images/odoo.png',
    tittle: 'Metalistería Madrid',
    description: 'Dando apollo en proyecto ERP con Odoo para Metalistería Madrid.',
    projectUrl: 'https://community.oppomobile.es/',
  },
  {
    imgUrl: '/assets/images/wordPress.png',
    tittle: 'Kit Consulting',
    description: 'Creando páginas web con WordPress para la empresa Accuro Technology SL.',
    projectUrl: 'https://www.accuro.es/kit-consulting/',
  },
  {
    imgUrl: '/assets/images/mil_madrid.png',
    tittle: 'Hackathon',
    description: 'Hackaton realizado por (PTIC) con el apoyo de MIL- Madrid Innovation Lab.',
    projectUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7264600872691617793/',
  },
    {
      imgUrl: '/assets/images/glotter.png',
      tittle: 'Glotter',
      description: 'Trabajo fin de grado ABP framework, C# .Net y Angular framework.',
      projectUrl: 'https://github.com/lardevpro/Jlara.SystemLangGlotter',
    },
    {
      imgUrl: '/assets/images/street-fighter.png',
      tittle: 'Street Fighter',
      description: 'Replica del mítico juego retro usando Java SE con JavaSwing.',
      projectUrl: 'https://github.com/lardevpro/Street-Figther',
    },
  ];
}
