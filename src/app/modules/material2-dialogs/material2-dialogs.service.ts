import {Observable} from 'rxjs/Rx';
import {ConfirmDialog} from './confirm-dialog/confirm-dialog.component';
import {MdDialogRef, MdDialog, MdDialogConfig} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable()
export class Material2Dialogs {

  constructor(private dialog: MdDialog) {
  }

  public confirm(params: {title: string; message: string; okButton?: string; cancelButton?: string}): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialog>;

    dialogRef = this.dialog.open(ConfirmDialog);
    dialogRef.componentInstance.title = params.title;
    dialogRef.componentInstance.message = params.message;
    dialogRef.componentInstance.okButton = params.okButton || "OK";
    dialogRef.componentInstance.cancelButton = params.cancelButton || "CANCEL";

    return dialogRef.afterClosed();
  }

}
