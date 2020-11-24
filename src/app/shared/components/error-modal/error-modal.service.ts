import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorWrapper } from '@interfaces/error-wrapper.interface';
import { ErrorModalComponent } from '@components/error-modal/error-modal.component';

@Injectable()
export class ErrorModalService {

  private opened = false;

  constructor(private dialog: MatDialog) {}

  showErrorModal(errorWrapper: ErrorWrapper): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(ErrorModalComponent, {
        data: errorWrapper,
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
