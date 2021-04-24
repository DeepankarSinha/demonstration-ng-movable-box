import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxyardComponent } from './boxyard.component';

describe('BoxyardComponent', () => {
  let component: BoxyardComponent;
  let fixture: ComponentFixture<BoxyardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxyardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
