import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorterFormComponent } from './shorter-form.component';

describe('ShorterFormComponent', () => {
  let component: ShorterFormComponent;
  let fixture: ComponentFixture<ShorterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
