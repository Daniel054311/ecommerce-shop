import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCategoryComponent } from './women-category.component';

describe('WomenCategoryComponent', () => {
  let component: WomenCategoryComponent;
  let fixture: ComponentFixture<WomenCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
