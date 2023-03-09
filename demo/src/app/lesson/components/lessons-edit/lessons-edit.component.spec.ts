import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsEditComponent } from './lessons-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('LessonsEditComponent', () => {
  let component: LessonsEditComponent;
  let fixture: ComponentFixture<LessonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsEditComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
