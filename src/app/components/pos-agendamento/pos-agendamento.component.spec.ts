import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAgendamentoComponent } from './pos-agendamento.component';

describe('PosAgendamentoComponent', () => {
  let component: PosAgendamentoComponent;
  let fixture: ComponentFixture<PosAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
