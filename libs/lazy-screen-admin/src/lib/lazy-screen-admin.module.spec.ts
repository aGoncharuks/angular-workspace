import { async, TestBed } from '@angular/core/testing';
import { LazyScreenAdminModule } from './lazy-screen-admin.module';

describe('LazyScreenAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LazyScreenAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LazyScreenAdminModule).toBeDefined();
  });
});
