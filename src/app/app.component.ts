import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { DropdowComponent } from "./dropdow/dropdow.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, DropdowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

