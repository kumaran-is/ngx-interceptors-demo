import { TestBed, inject, async } from '@angular/core/testing';

import { ErrorModalService } from '@services/error-modal/error-modal.service';

describe('Error Modal Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ErrorModalService
      ]
    });
  });

  it('should be created', inject([ErrorModalService], (service: ErrorModalService) => {
    expect(service).toBeTruthy();
  }));

  it('should trigger the modal to be shown', async(inject([ErrorModalService], (service: ErrorModalService) => {
    const modalStream = service.getErrorStream().toPromise();
    const mockError = 'Some error message';

    const promise = modalStream.then(command => {
      expect(command).toBe(mockError);
    });

    service.showErrorModal(mockError);

    return promise;
  })));

  it('should trigger the modal to be hidden', async(inject([ErrorModalService], (service: ErrorModalService) => {
    const modalStream = service.getErrorStream().toPromise();

    const promise = modalStream.then(command => {
      expect(command).toBe('');
    });

    service.hideErrorModal();

    return promise;
  })));
});
