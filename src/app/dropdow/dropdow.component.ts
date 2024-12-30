import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dropdow',
  imports: [RouterModule],
  templateUrl: './dropdow.component.html',
  styleUrl: './dropdow.component.scss',
  standalone: true,
})
export class DropdowComponent {
  toggleNavbar() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu) {
      navbarMenu.classList.toggle('active');
    }
  }

  closeNavbar() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu) {
      navbarMenu.classList.remove('active');
    }
  }
}
