
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssueManagerService } from './issue-manager.service';

describe('VersionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueManagerService]
    });
  });

  it('should ...', inject([IssueManagerService], (service: IssueManagerService) => {
    expect(service).toBeTruthy();
  }));
});
