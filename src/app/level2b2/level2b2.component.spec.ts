/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2b2Component } from './level2b2.component';

describe('Level2b2Component', () => {
  let component: Level2b2Component;
  let fixture: ComponentFixture<Level2b2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2b2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2b2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
