import { TestBed } from '@angular/core/testing';

import { UserPrefrencesService } from './user-prefrences.service';

describe('UserPrefrencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPrefrencesService = TestBed.get(UserPrefrencesService);
    expect(service).toBeTruthy();
  });
});
