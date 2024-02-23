import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArivalComponent } from './new-arival.component';

describe('NewArivalComponent', () => {
  let component: NewArivalComponent;
  let fixture: ComponentFixture<NewArivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewArivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
