import { Observable } from "rxjs";

export enum PopupSizeEnum {
  Full = 'full-popup',
  Medium = 'medium-popup',
  Large = 'large-popup'
}

export interface PopupComponent<InputType, OuputType> {
  receiveData(data: InputType): void;
  receivePopupRef(ref: PopupRef<OuputType>): void;
}

export interface PopupRef<OuputType> {
  close(data?: OuputType): void;
  beforeClosed(): Observable<OuputType | undefined>;
}

export interface IPopupOption {
  params: any;
  customClasses?: string[];
  disableClose?: boolean;
}

export class PopupOption {
  params: any;
  customClasses: string[] = [];
  disableClose: boolean | undefined = false;

  constructor(_data?: IPopupOption) {
    this.params = _data?.params;
    this.customClasses = _data?.customClasses
      ? _data.customClasses
      : [PopupSizeEnum.Full];
    this.disableClose = _data?.disableClose;
  }
}
