import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarrosselComponent } from "./components/carrossel/carrossel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBarComponent, MainComponent, FooterComponent, CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
