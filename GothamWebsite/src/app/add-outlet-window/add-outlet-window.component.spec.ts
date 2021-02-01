import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutletWindowComponent } from './add-outlet-window.component';

describe('AddOutletWindowComponent', () => {
  let component: AddOutletWindowComponent;
  let fixture: ComponentFixture<AddOutletWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutletWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutletWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
