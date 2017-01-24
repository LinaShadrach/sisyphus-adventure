/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2b1Component } from './level2b1.component';

describe('Level2b1Component', () => {
  let component: Level2b1Component;
  let fixture: ComponentFixture<Level2b1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2b1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2b1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
