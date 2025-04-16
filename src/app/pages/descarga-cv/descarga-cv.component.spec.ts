import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaCvComponent } from './descarga-cv.component';

describe('DescargaCvComponent', () => {
  let component: DescargaCvComponent;
  let fixture: ComponentFixture<DescargaCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargaCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargaCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
