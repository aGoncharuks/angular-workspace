import { async, TestBed } from '@angular/core/testing';
import { SharedScreenModule } from './shared-screen.module';

describe('SharedScreenModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedScreenModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedScreenModule).toBeDefined();
  });
});
