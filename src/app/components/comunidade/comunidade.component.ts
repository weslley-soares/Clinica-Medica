import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.scss']
})
export class ComunidadeComponent {
  mensagens: string[] = []; // Lista de mensagens

  // Método para adicionar uma nova mensagem
  adicionarMensagem(input: HTMLInputElement): void {
    const novaMensagem = input.value.trim();
    if (novaMensagem) {
      this.mensagens.push(novaMensagem);
      input.value = ''; // Limpa o campo de entrada
    }
  }

  // Método para excluir uma mensagem
  excluirMensagem(indice: number): void {
    this.mensagens.splice(indice, 1);
  }
}
