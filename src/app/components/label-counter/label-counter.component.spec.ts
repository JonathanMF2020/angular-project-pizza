import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCounterComponent } from './label-counter.component';

describe('LabelCounterComponent', () => {
  let component: LabelCounterComponent;
  let fixture: ComponentFixture<LabelCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
