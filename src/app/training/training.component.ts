import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  imports: [CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  standalone: true,
})
export class TrainingComponent {
  trainings = [
    {
      icon: 'fas fa-laptop-code',
      badge: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      description: 'IES Gregorio Prieto | Septiembre 2022 - Diciembre 2024.',
      colorClass: 'light-lilac'
    },
    {
      icon: 'fas fa-university',
      badge: 'Acceso a la Universidad para Mayores de 25 años',
      description: 'UNED | Septiembre 2020 - Junio 2021.',
      colorClass: 'pink'
    },
    {
      icon: 'fas fa-certificate',
      badge: 'Certificado Scrum técnico',
      description: '2 horas',
      colorClass: 'brown'
    },
    {
      icon: 'fas fa-gamepad',
      badge: 'Certificado Unity',
      description: '6 horas',
      colorClass: 'dark-lilac'
    },
    {
      icon: 'fab fa-html5',
      badge: 'Certificado HTML y CSS3',
      description: '10 horas',
      colorClass: 'light-lilac'
    },
    {
      icon: 'fab fa-java',
      badge: 'Certificado Java desde Cero',
      description: '10 horas',
      colorClass: 'pink'
    },
    {
      icon: 'fas fa-code',
      badge: 'Certificado Java XML',
      description: '10 horas',
      colorClass: 'brown'
    },
    {
      icon: 'fas fa-code',
      badge: 'Certificado C++',
      description: '1 hora',
      colorClass: 'dark-lilac'
    },
    {
      icon: 'fas fa-code',
      badge: 'Certificado C++ orientado a objetos o funcional',
      description: '1 hora',
      colorClass: 'light-lilac'
    },
    {
      icon: 'fas fa-vial',
      badge: 'Certificado JUnit5',
      description: '2 horas',
      colorClass: 'pink'
    },
    {
      icon: 'fas fa-leaf',
      badge: 'Certificado Introducción a Spring framework',
      description: '1 hora',
      colorClass: 'brown'
    },
    {
      icon: 'fas fa-leaf',
      badge: 'Certificado Mi primera aplicación web con Spring Boot',
      description: '2 horas',
      colorClass: 'dark-lilac'
    }
  ];
}
