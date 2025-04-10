import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCopyComponent } from './jira-copy.component';

describe('JiraCopyComponent', () => {
  let component: JiraCopyComponent;
  let fixture: ComponentFixture<JiraCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JiraCopyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
