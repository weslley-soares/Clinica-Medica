import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IconeLogComponent } from "../icone-log/icone-log.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [IconeLogComponent]
})
export class NavBarComponent implements AfterViewInit {

  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('X') xRef!: ElementRef;
  @ViewChild('nav') navRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // Garantir que os elementos estão acessíveis após a inicialização da view
    const menu = this.menuRef.nativeElement;
    const x = this.xRef.nativeElement;
    const nav = this.navRef.nativeElement;

    // Adicionar ouvintes de eventos
    this.addEventListeners(menu, x, nav);
  }

  private addEventListeners(menu: HTMLElement, x: HTMLElement, nav: HTMLElement): void {
    // Mostrar o menu ao clicar no ícone 'menu'
    menu.addEventListener('click', () => {
      if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
        menu.style.display = 'none';
      }
    });

    // Fechar o menu ao clicar no ícone 'X'
    x.addEventListener('click', () => {
      if (nav.style.display === 'block') {
        nav.style.display = 'none';
        menu.style.display = 'block';
      }
    });
  }
}
