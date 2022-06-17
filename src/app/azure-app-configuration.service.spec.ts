import { TestBed } from '@angular/core/testing';

import { AzureAppConfigurationService } from './azure-app-configuration.service';

describe('AzureAppConfigurationService', () => {
  let service: AzureAppConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureAppConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
