/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level2a1Component } from './level2a1.component';

describe('Level2a1Component', () => {
  let component: Level2a1Component;
  let fixture: ComponentFixture<Level2a1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2a1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
