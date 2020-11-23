import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { LoadingComponent } from '@components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private opened = false;
  private dialogRef: MatDialogRef<LoadingComponent>;

  constructor (private dialog: MatDialog) { }

  showLoader(): void {
    if (!this.opened) {
      this.opened = true;
      this.dialogRef = this.dialog.open(LoadingComponent, {
        data: undefined,
        maxHeight: "100%",
        width: "400px",
        maxWidth: "100%",
        disableClose: true,
        hasBackdrop: true
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

  hideLoader() {
    this.dialogRef.close();
  }
}
