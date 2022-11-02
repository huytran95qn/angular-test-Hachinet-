import { Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupOption, PopupComponent, PopupRef } from 'src/app/models/popup/popup.model';

export abstract class PopupService {
  constructor(protected dialog: MatDialog) { }
  protected openGeneric<ComponentType extends PopupComponent<InputType, OutputType>, InputType, OutputType>(
    component: Type<ComponentType>,
    options: PopupOption = new PopupOption()
  ): PopupRef<OutputType> {
    options.customClasses = options.customClasses.concat('popup');
    const modal = this.dialog.open<ComponentType, InputType, OutputType>(component, {
      panelClass: options.customClasses,
      disableClose: options.disableClose
    });
    const ref: PopupRef<OutputType> = {
      close: (data?: OutputType) => modal.close(data),
      beforeClosed: () => modal.beforeClosed()
    };

    modal.componentInstance.receiveData(options.params);
    modal.componentInstance.receivePopupRef(ref);
    return ref;
  }
}
