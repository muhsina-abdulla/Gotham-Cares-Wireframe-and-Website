import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnInComponent } from './sighn-in.component';

describe('SighnInComponent', () => {
  let component: SighnInComponent;
  let fixture: ComponentFixture<SighnInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SighnInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SighnInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
