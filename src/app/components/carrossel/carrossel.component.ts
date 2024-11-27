import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  // Lista de imagens para o carrossel
  images: string[] = [
    'carrosel/pexels-cottonbro-4101143.jpg',
    'carrosel/pexels-mart-production-7089020.jpg',
    'carrosel/pexels-shkrabaanthony-7579174.jpg',
    'carrosel/pexels-shvetsa-4226264.jpg'
  ];

  // Índice do slide atual (inicia com o primeiro slide)
  currentIndex: number = 0;

  // Função que calcula o estilo para mover o carrossel
  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // Função que avança para o próximo slide
  next() {
    // Se não for o último slide, vai para o próximo. Caso contrário, volta para o primeiro slide.
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Retorna ao primeiro slide
    }
  }

  // Função que volta para o slide anterior
  prev() {
    // Se não for o primeiro slide, vai para o anterior. Caso contrário, vai para o último slide.
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;  // Vai para o último slide
    }
  }
}
