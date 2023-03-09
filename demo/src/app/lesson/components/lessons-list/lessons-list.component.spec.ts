import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListComponent } from './lessons-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('LessonsListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsListComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
