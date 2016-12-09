/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemcommentsComponent } from './itemcomments.component';

describe('ItemcommentsComponent', () => {
  let component: ItemcommentsComponent;
  let fixture: ComponentFixture<ItemcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
