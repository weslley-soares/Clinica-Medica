import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarrosselComponent } from "./components/carrossel/carrossel.component";
import { PsiquiatriaComponent } from "./components/psiquiatria/psiquiatria.component";
import { NeurologiaComponent } from "./components/neurologia/neurologia.component";
import { PediatricaComponent } from "./components/pediatrica/pediatrica.component";
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { PerguntaComponent } from "./components/pergunta/pergunta.component";
import { IconeLogComponent } from "./components/icone-log/icone-log.component";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from '@angular/common';
import { PerfilComponent } from "./components/perfil/perfil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    NavBarComponent,
    MainComponent,
    FooterComponent,
    CarrosselComponent,
    PsiquiatriaComponent,
    NeurologiaComponent,
    PediatricaComponent,
    ContatoComponent,
    SobreComponent,
    EspecialidadesComponent,
    CadastroComponent,
    PerguntaComponent,
    IconeLogComponent,
    LoginComponent,
    PerfilComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';

}
