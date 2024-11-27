import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeLogComponent } from './icone-log.component';

describe('IconeLogComponent', () => {
  let component: IconeLogComponent;
  let fixture: ComponentFixture<IconeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconeLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
