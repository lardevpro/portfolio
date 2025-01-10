import { Component } from '@angular/core';
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-about',
  imports: [ContactComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
})
export class AboutComponent  {
}
