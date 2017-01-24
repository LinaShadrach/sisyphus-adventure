/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2a2Component } from './level2a2.component';

describe('Level2a2Component', () => {
  let component: Level2a2Component;
  let fixture: ComponentFixture<Level2a2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2a2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2a2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
