import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggersComponent } from './joggers.component';

describe('JoggersComponent', () => {
  let component: JoggersComponent;
  let fixture: ComponentFixture<JoggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoggersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
