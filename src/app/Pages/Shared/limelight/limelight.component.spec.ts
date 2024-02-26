import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimelightComponent } from './limelight.component';

describe('LimelightComponent', () => {
  let component: LimelightComponent;
  let fixture: ComponentFixture<LimelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimelightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
