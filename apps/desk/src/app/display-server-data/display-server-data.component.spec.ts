import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServerDataComponent } from './display-server-data.component';

describe('DisplayServerDataComponent', () => {
  let component: DisplayServerDataComponent;
  let fixture: ComponentFixture<DisplayServerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
