import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCadastroMedicoComponent } from './pos-cadastro-medico.component';

describe('PosCadastroMedicoComponent', () => {
  let component: PosCadastroMedicoComponent;
  let fixture: ComponentFixture<PosCadastroMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosCadastroMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCadastroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
