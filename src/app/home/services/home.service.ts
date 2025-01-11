import { Injectable } from '@angular/core';
import { About } from './models/about';

@Injectable()


export class HomeService {
  
  aboutModel: About = new About();

  constructor() {

    this.aboutModel.welcome = 'Bienvenido a mi Portfolio';
    this.aboutModel.title = 'Sobre Mi';
    this.aboutModel.presentation = 'Hola, soy Juan Gabriel Lara';
    this.aboutModel.description = `Soy técnico superior en desarrollo de aplicaciones multiplataforma con
                                    experiencia en proyectos como OPPO Community, utilizando Angular, y en 
                                    trabajos internos con WordPress. También he trabajado en la configuración 
                                    de módulos en el sistema ERP Odoo para Metalistería Madrid.
                                    Aunque el sector está lleno de jóvenes talentosos, mi experiencia y 
                                    habilidades como constancia, compromiso, disciplina y toma de decisiones en 
                                    contextos exigentes me permiten marcar la diferencia y aportar valor a sus 
                                    proyectos.`;
    this.aboutModel.urlImage = '/assets/images/photo.png';
  

  }


  getAboutModel(): About {
    return this.aboutModel;
  }
}
