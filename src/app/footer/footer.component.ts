import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  title : string = 'Portfolio';
  name : string = 'Juan Gabriel Lara';
  urlLinkedin : string = 'https://www.linkedin.com/in/lardevpro/';
  urlGithub : string = 'https://github.com/lardevpro';
  urlMail : string = 'mailto:lardevpro@gmail.com';
  email : string = 'lardevpro@gmail.com';


  getYear(): number {
      return new Date().getFullYear();
    }

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Correo electrónico copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo electrónico: ', err);
    });
  }
}
