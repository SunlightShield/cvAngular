import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactameComponent } from './card-contactame.component';

describe('CardContactameComponent', () => {
  let component: CardContactameComponent;
  let fixture: ComponentFixture<CardContactameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContactameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContactameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
