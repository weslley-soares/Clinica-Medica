import { Component, importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,  // Define o componente como standalone
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule diretamente aqui
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.css']
})
export class PerfilMedicoComponent {
  nomeMedico: string = 'Dr. João Silva';
  especialidadeMedico: string = 'Psiquiatra';
  crmMedico: string = 'CRM: 123456';
  fotoMedico: string = 'foto_medico.jpg';

  showModalEditar: boolean = false;
  showModalLogin: boolean = false;
  msgErro: string = '';

  editarForm: FormGroup;
  loginForm: FormGroup;

  email: string = '';

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário de editar
    this.editarForm = this.fb.group({
      nome: [this.nomeMedico, Validators.required],
      especialidade: [this.especialidadeMedico, Validators.required],
      crm: [this.crmMedico, Validators.required]
    });

    // Inicializa o formulário de login (sem validação por enquanto)
    this.loginForm = this.fb.group({
      email: [this.email, Validators.required]
    });
  }

  onEditarClick(): void {
    this.showModalEditar = true;
  }

  onSaveClick(): void {
    if (this.editarForm.valid) {
      this.nomeMedico = this.editarForm.value.nome;
      this.especialidadeMedico = this.editarForm.value.especialidade;
      this.crmMedico = this.editarForm.value.crm;
      this.showModalEditar = false;
    }
  }

  onFotoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fotoMedico = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onLogout(): void {
    this.showModalLogin = true;
  }

  onLoginClick(): void {
    if (this.loginForm.valid) {
      this.showModalLogin = false;
    } else {
      this.msgErro = 'Usuário não encontrado, faça seu cadastro para agendar sua consulta';
    }
  }

  onCadastrarClick(): void {
    // Redireciona para a página de cadastro
    this.showModalLogin = false;
  }
}
