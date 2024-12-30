import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class Navbar {
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
