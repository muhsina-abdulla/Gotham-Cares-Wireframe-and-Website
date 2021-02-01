import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolRegisterComponent } from './vol-register.component';

describe('VolRegisterComponent', () => {
  let component: VolRegisterComponent;
  let fixture: ComponentFixture<VolRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
