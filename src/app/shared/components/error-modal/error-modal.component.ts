import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorWrapper } from '@interfaces/error-wrapper.interface';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA)
  public errorWrapper: ErrorWrapper) {}

}
