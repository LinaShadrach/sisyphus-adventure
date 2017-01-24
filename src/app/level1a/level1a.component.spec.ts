/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level1aComponent } from './level1a.component';

describe('Level1aComponent', () => {
  let component: Level1aComponent;
  let fixture: ComponentFixture<Level1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
