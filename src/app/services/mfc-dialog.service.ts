import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MFCDialogService {
  constructor(public dialog: MatDialog) {}
  OpenDialog(data: any) {
    this.dialog.open(DialogComponent, { data });
  }
  info(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        ...data,
        classes: 'info-dialog',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  error(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, { data });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
