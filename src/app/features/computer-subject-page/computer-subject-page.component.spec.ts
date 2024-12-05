import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSubjectPageComponent } from './computer-subject-page.component';

describe('ComputerSubjectPageComponent', () => {
  let component: ComputerSubjectPageComponent;
  let fixture: ComponentFixture<ComputerSubjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerSubjectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
