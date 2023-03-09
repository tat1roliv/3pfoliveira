import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from "@angular/router/testing";
import { StudentsAddComponent } from './students-add.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('Unit Testing from StudentsAddComponent', () => {
  let component: StudentsAddComponent;
  let fixture: ComponentFixture<StudentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAddComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create this component', () => {
    expect(component).toBeTruthy();
  });
});
