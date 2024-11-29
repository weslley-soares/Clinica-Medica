import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  fotoUsuario: string = 'assets/foto_usuario.jpg';  // Imagem padrão
  nomeUsuario: string = 'João Silva';
  emailUsuario: string = 'joao.silva@example.com';
  bioUsuario: string = 'Desenvolvedor web';
  msgErro: string = '';
  modalEditarVisivel: boolean = false;
  modalLoginVisivel: boolean = false;
  email_login: any;
  senha_login: any;

  // Método para abrir o modal de editar
  abrirModalEditar(): void {
    this.modalEditarVisivel = true;
  }

  // Método para atualizar a foto de perfil
  atualizarFoto(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fotoUsuario = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // Método para salvar as informações de perfil
  salvarInformacoes(event: Event): void {
    event.preventDefault();  // Impede o envio do formulário e o fechamento precoce do modal

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const bio = (document.getElementById('bio') as HTMLTextAreaElement).value;

    this.nomeUsuario = nome;
    this.emailUsuario = email;
    this.bioUsuario = bio;

    this.modalEditarVisivel = false;  // Fecha o modal
  }

  // Método de login
  login(email: string, senha: string): void {
    if (email === 'email@teste.com' && senha === '12345678') {
      window.location.href = 'perfil.html';  // Redireciona para o perfil
    } else {
      this.msgErro = 'Usuário não encontrado, faça seu cadastro para agendar sua consulta';
    }
  }

  // Método para redirecionar ao cadastro
  irParaCadastro(): void {
    window.location.href = 'cadastro.html';
  }

  // Método para sair (deslogar)
  sair(): void {
    window.location.href = '/login';
  }

  // Fechar modais ao clicar fora deles
  fecharModal(event: Event, modal: string): void {
    const modalElement = document.getElementById(modal);
    if (modalElement && event.target === modalElement) {
      if (modal === 'modalEditar') {
        this.modalEditarVisivel = false;
      }
      if (modal === 'modalLogin') {
        this.modalLoginVisivel = false;
      }
    }
  }
}
