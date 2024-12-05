import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaCyberPageComponent } from './gama-cyber-page.component';

describe('GamaCyberPageComponent', () => {
  let component: GamaCyberPageComponent;
  let fixture: ComponentFixture<GamaCyberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamaCyberPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamaCyberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
