import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSectionComponent } from './short-section.component';

describe('ShortSectionComponent', () => {
  let component: ShortSectionComponent;
  let fixture: ComponentFixture<ShortSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
