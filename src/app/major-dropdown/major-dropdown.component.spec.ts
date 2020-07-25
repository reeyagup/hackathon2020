import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorDropdownComponent } from './major-dropdown.component';

describe('MajorDropdownComponent', () => {
  let component: MajorDropdownComponent;
  let fixture: ComponentFixture<MajorDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
