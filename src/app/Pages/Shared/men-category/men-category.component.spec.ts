import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCategoryComponent } from './men-category.component';

describe('MenCategoryComponent', () => {
  let component: MenCategoryComponent;
  let fixture: ComponentFixture<MenCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
