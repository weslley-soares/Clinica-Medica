import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCadastroComponent } from './pos-cadastro.component';

describe('PosCadastroComponent', () => {
  let component: PosCadastroComponent;
  let fixture: ComponentFixture<PosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
