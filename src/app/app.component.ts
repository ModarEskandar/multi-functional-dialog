import { Component, OnInit } from '@angular/core';
import { MFCDialogService } from './services/mfc-dialog.service';
import { DialogData } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dialog';
  data: DialogData = {
    name: 'modar',
    animal: 'dragon',
  };
  constructor(private dialogService: MFCDialogService) {}
  ngOnInit(): void {
    console.log(this.data);

    this.dialogService.info(this.data);
  }
}
