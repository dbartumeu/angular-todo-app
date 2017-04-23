import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'material2-dialogs-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog {
  public title: string;
  public message: string;
  public okButton: string;
  public cancelButton: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {
  }
}
