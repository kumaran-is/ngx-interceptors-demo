import { TestBed, inject, async } from '@angular/core/testing';

import { LoadingService } from '@services/loading/loading.service';

describe('Loading Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        LoadingService
      ]
    });
  });

  it('should be created', inject([LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));

  it('should trigger the loader to be shown', async(inject([LoadingService], (service: LoadingService) => {
    const loadingStream = service.getLoadingStream().toPromise();

    const promise = loadingStream.then(command => {
      expect(command).toBe(true);
    });

    service.showLoader();

    return promise;
  })));

  it('should trigger the loader to be hidden', async(inject([LoadingService], (service: LoadingService) => {
    const loadingStream = service.getLoadingStream().toPromise();

    const promise = loadingStream.then(command => {
      expect(command).toBe(false);
    });

    service.hideLoader();

    return promise;
  })));
});
