import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MFCDialogService {
  constructor(public dialog: MatDialog) {}
  openDialog(data: any) {
    return this.dialog.open(DialogComponent, {
      data,
      position: data.position,
    });
  }
  info(data: any): void {
    data = {
      ...data,
      dialogType: 'info',
      position: { left: '10px', top: '10px' },
    };
    const dialogRef = this.openDialog(data);

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(
        () =>
          this.success({
            ...result,
            dialogMsg: ' Success dialog!!',
            position: { right: '10px', top: '10px' },
          }),
        1000
      );
    });
  }
  success(data: any): void {
    data = {
      ...data,
      dialogType: 'success',
    };
    const dialogRef = this.openDialog(data);

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(
        () =>
          this.error({
            ...result,
            dialogMsg: ' Error dialog!!',
            position: { left: '10px', bottom: '10px' },
          }),
        1000
      );
    });
  }
  error(data: any): void {
    data = {
      ...data,
      dialogType: 'error',
    };
    const dialogRef = this.openDialog(data);

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(
        () =>
          this.warning({
            ...result,
            dialogMsg: ' Warning dialog!!',
            position: { right: '10px', bottom: '10px' },
          }),
        1000
      );
    });
  }

  warning(data: any): void {
    data = {
      ...data,
      dialogType: 'warning',
    };
    const dialogRef = this.openDialog(data);

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(
        () => this.info({ ...result, dialogMsg: ' Info dialog!!' }),
        1000
      );
    });
  }
}
