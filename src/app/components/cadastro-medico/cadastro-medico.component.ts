import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css'],
  standalone: true,  // Definindo que o componente é standalone
  imports: [ReactiveFormsModule]  // Importando ReactiveFormsModule diretamente aqui
})
export class CadastroMedicoComponent {
  cadastroForm: FormGroup;
  neurologiaInfantilVisible = false;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      crm: ['', Validators.required],
      especialidade: ['', Validators.required],
      neurologiaInfantil: [''],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    });

    // Observando alterações no campo 'especialidade'
    this.cadastroForm.get('especialidade')?.valueChanges.subscribe(value => {
      this.neurologiaInfantilVisible = value === 'Neurologista';
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const { senha, confirmarSenha, especialidade, neurologiaInfantil } = this.cadastroForm.value;

      // Verificando se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert('Senhas não coincidem!');
        return;
      }

      // Verificando se a neurologia infantil foi informada, caso a especialidade seja Neurologista
      if (especialidade === 'Neurologista' && !neurologiaInfantil) {
        alert('Por favor, informe se atua em Neurologia Infantil.');
        return;
      }

      console.log('Dados enviados:', this.cadastroForm.value);
      window.location.href = 'login.html';
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
