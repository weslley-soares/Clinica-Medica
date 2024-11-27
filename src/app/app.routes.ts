import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './components/main/main.component';
import { PsiquiatriaComponent } from './components/psiquiatria/psiquiatria.component';
import { NeurologiaComponent } from './components/neurologia/neurologia.component';
import { PediatricaComponent } from './components/pediatrica/pediatrica.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PerguntaComponent } from './components/pergunta/pergunta.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'psiquiatria', component: PsiquiatriaComponent},
  {path: 'neurologia', component: NeurologiaComponent},
  {path: 'neurologia-pediatrica', component: PediatricaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'espec', component: EspecialidadesComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'pergunta', component: PerguntaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent}
];
