import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, OnDestroy {
  // Lista de imagens para o carrossel
  images: string[] = [
    'pexels-cottonbro-4101143.jpg',
    'pexels-mart-production-7089020.jpg',
    'pexels-shkrabaanthony-7579174.jpg',
    'pexels-shvetsa-4226264.jpg'
  ];

  // Índice do slide atual (inicia com o primeiro slide)
  currentIndex: number = 0;

  // Variável para armazenar o ID do intervalo
  private intervalId: any;

  // Função que calcula o estilo para mover o carrossel
  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // Função que avança para o próximo slide
  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Retorna ao primeiro slide
    }
  }

  // Função que volta para o slide anterior
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;  // Vai para o último slide
    }
  }

  // Iniciar o carrossel automático
  ngOnInit() {
    // Defina o intervalo para avançar os slides automaticamente a cada 3 segundos
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // 3000 milissegundos (3 segundos)
  }

  // Limpar o intervalo quando o componente for destruído
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

