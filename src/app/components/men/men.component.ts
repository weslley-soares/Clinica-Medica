import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [],
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  menuItems = [
    { titulo: 'Home', imagem: 'links/home.png' },
    { titulo: 'Especialidades', imagem: '/links/especificacoes.png' },
    { titulo: 'Comunidade', imagem: '/links/jornal.png' },
    { titulo: 'Sobre Nós', imagem: '/links/icone-contato.png' },
    { titulo: 'Contato', imagem: '/links/contato.png' }
  ];

  imagemSelecionada = this.menuItems[0].imagem;
  isMobile = window.innerWidth < 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
  }

  mudarImagem(imagem: string) {
    if (this.isMobile) return;
    this.imagemSelecionada = imagem;
  }

  voltarImagemPrincipal() {
    if (this.isMobile) return;
    this.imagemSelecionada = this.menuItems[0].imagem;
  }

  selecionarImagem(imagem: string) {
    this.imagemSelecionada = imagem;
  }
}
