/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VersionManagerComponent } from './version-manager.component';

describe('VersionManagerComponent', () => {
  let component: VersionManagerComponent;
  let fixture: ComponentFixture<VersionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
