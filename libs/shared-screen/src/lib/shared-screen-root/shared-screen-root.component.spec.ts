import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedScreenRootComponent } from './shared-screen-root.component';

describe('SharedScreenRootComponent', () => {
  let component: SharedScreenRootComponent;
  let fixture: ComponentFixture<SharedScreenRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedScreenRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedScreenRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
