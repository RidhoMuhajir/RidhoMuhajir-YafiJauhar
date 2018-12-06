/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KostComponent } from './kost.component';

describe('KostComponent', () => {
  let component: KostComponent;
  let fixture: ComponentFixture<KostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
