import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CoursesTabComponent', () => {
  let component: CoursesTabComponent;
  let fixture: ComponentFixture<CoursesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
