import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertBtnComponent } from './convert-btn.component';

describe('ConvertBtnComponent', () => {
  let component: ConvertBtnComponent;
  let fixture: ComponentFixture<ConvertBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
