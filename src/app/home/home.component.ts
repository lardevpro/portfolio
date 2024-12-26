import { Component } from '@angular/core';
import { DropdowComponent } from "../dropdow/dropdow.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

}
