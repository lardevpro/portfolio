import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class Navbar {
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.handleClickOutside.bind(this));
    }
  }

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeNavbar() {
    this.isMenuOpen = false;
  }

  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-navbar')) {
      this.closeNavbar();
    }
  }
}
