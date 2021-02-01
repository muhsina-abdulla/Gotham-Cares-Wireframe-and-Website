import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletVolComponent } from './outlet-vol.component';

describe('OutletVolComponent', () => {
  let component: OutletVolComponent;
  let fixture: ComponentFixture<OutletVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
