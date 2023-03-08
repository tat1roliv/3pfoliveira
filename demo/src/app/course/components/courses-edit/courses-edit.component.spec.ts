import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEditComponent } from './courses-edit.component';

describe('CoursesEditComponent', () => {
  let component: CoursesEditComponent;
  let fixture: ComponentFixture<CoursesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
