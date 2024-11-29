import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirecionar para outra página

@Component({
  selector: 'app-login-medico',
  standalone: true,
  imports: [],
  templateUrl: './login-medico.component.html',
  styleUrl: './login-medico.component.css'
})
export class LoginMedicoComponent implements AfterViewInit {

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
      if (this.email === "crm12345" && this.senha === "12345678") {
        // Redireciona para a página de perfil
        this.router.navigate(['/perfil-medico']);
      } else {
        alert("CRM ou senha incorretos. Faça seu cadastro para agendar sua consulta.");
      }
    });
  }
}
