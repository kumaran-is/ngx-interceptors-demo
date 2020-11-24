import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CoreConstants } from '@core/core.constants';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  successConfig = new MatSnackBarConfig();
  failureConfig = new MatSnackBarConfig();
  warningConfig = new MatSnackBarConfig();
  infoConfig = new MatSnackBarConfig();

  constructor(private matSnackBar: MatSnackBar) {
    this.successConfig.panelClass = ['green-snackbar'];
    this.successConfig.duration = CoreConstants.ALERT_DURATION;
    this.failureConfig.panelClass = ['red-snackbar'];
    this.failureConfig.duration = CoreConstants.ALERT_DURATION;
    this.warningConfig.panelClass = ['orange-snackbar'];
    this.warningConfig.duration = CoreConstants.ALERT_DURATION;
    this.infoConfig.panelClass = ['cyan-snackbar'];
    this.infoConfig.duration = CoreConstants.ALERT_DURATION;

  }

  showSuccessAlert(message: string, action: string = 'close', duration?: number) {
    this.matSnackBar.open(message, action, this.successConfig);
  }

  showFailureAlert(message: string, action: string = 'close', duration?: number) {
    this.matSnackBar.open(message, action, this.failureConfig);
  }

  showWarningAlert(message: string, action: string = 'close', duration?: number) {
    this.matSnackBar.open(message, action, this.warningConfig);
  }

  showInfoAlert(message: string, action: string = 'close', duration?: number) {
    this.matSnackBar.open(message, action, this.infoConfig);
  }
}
