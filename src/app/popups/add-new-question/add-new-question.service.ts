import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PopupOption, PopupRef } from "src/app/models/popup/popup.model";
import { PopupService } from "src/app/services/popup/popup.service";
import { AddNewQuestionComponent } from "./add-new-question.component";

@Injectable({
  providedIn: 'root'
})
export class AddNewQuestionService extends PopupService {
  constructor(dialog: MatDialog) {
    super(dialog)
  }

  open(params?: string): PopupRef<void> {
    const option = new PopupOption({ params });
    return this.openGeneric<AddNewQuestionComponent, void, void>(
      AddNewQuestionComponent,
      option
    );
  }
}
