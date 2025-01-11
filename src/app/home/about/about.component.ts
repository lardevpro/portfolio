import { Component, Input } from '@angular/core';
import { ContactComponent } from "./contact/contact.component";
import { About } from '../services/models/about';

@Component({
  selector: 'app-about',
  imports: [ContactComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
})



export class AboutComponent  {
@Input() about:About = new About();
}
