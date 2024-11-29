import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirecionar para outra página

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('senha') senhaRef!: ElementRef;
  @ViewChild('entrar') entrarRef!: ElementRef;

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const emailInput = this.emailRef.nativeElement;
    const senhaInput = this.senhaRef.nativeElement;
    const entrarButton = this.entrarRef.nativeElement;

    // Adicionando o event listener para o botão de login
    this.addEventListeners(entrarButton, emailInput, senhaInput);
  }

  // Lógica para validar o login
  private addEventListeners(entrar: HTMLElement, emailInput: HTMLInputElement, senhaInput: HTMLInputElement): void {
    entrar.addEventListener('click', (event: Event) => {
      event.preventDefault(); // Impede que o formulário seja enviado automaticamente

      // Obtendo os valores de email e senha
      this.email = emailInput.value;
      this.senha = senhaInput.value;

      // Validação de login
      if (this.email === "email@senha.com" && this.senha === "12345678") {
        // Redireciona para a página de perfil
        this.router.navigate(['/perfil']);
      } else {
        alert("Email ou senha incorretos. Faça seu cadastro para agendar sua consulta.");
      }
    });
  }
}
