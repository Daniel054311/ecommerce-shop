import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNavComponent } from './sign-up-nav.component';

describe('SignUpNavComponent', () => {
  let component: SignUpNavComponent;
  let fixture: ComponentFixture<SignUpNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
