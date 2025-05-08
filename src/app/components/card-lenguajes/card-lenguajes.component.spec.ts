import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLenguajesComponent } from './card-lenguajes.component';

describe('CardLenguajesComponent', () => {
  let component: CardLenguajesComponent;
  let fixture: ComponentFixture<CardLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLenguajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


