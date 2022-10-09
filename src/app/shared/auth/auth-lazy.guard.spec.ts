import { TestBed } from '@angular/core/testing';

import { AuthLazyGuard } from './auth-lazy.guard';

describe('AuthLazyGuard', () => {
  let guard: AuthLazyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLazyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
