import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteOutletComponent } from './edit-delete-outlet.component';

describe('EditDeleteOutletComponent', () => {
  let component: EditDeleteOutletComponent;
  let fixture: ComponentFixture<EditDeleteOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
