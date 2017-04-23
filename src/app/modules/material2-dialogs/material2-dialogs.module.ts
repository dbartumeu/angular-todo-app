import { NgModule } from '@angular/core';
import { Material2Dialogs } from './material2-dialogs.service';
import { MaterialModule } from '@angular/material';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports:[
    MaterialModule.forRoot(),
  ],
  exports: [
    ConfirmDialog,
  ],
  declarations: [
    ConfirmDialog,
  ],
  providers: [
    Material2Dialogs,
  ],
  entryComponents: [
    ConfirmDialog,
  ],
})
export class Material2DialogsModule { }
