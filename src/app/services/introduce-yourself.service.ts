import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { RFormBuilder, TypeFormBuilder } from "../models/introduce-yourselft.model";
import { CheckBoxItem } from "../pages/form-builder/form-builder-checkbox/form-builder-checkbox.model";
import { getIntroduceYourselfAction } from "../stores/introduce-yourself/introduce-yourself.action";

@Injectable({
  providedIn: 'root'
})
export class IntroduceYourselfService {
  private introduceYourselfForm!: RFormBuilder[];

  constructor(
    private store: Store
  ) {}

  updateIntroduceYourself(data: RFormBuilder[]): void {
    this.introduceYourselfForm = data;
  }

  addIntroduceYourselfForm(data: RFormBuilder): void {
    this.introduceYourselfForm.push(data);
    this.store.dispatch(getIntroduceYourselfAction());

  }

  getIntroduceYourself(): Observable<RFormBuilder[]> {
    this.introduceYourselfForm = this.introduceYourselfForm
      ? this.introduceYourselfForm
      : [];
    return of(this.introduceYourselfForm);
  }

  getDefaultIntroduceYourself(): RFormBuilder[] {
    return [
      new RFormBuilder(TypeFormBuilder.TextArea, 'Please tell us about yourself', ''),
      new RFormBuilder(
        TypeFormBuilder.Checkbox,
        'Please select the languages you know',
        [
          new CheckBoxItem(1, 'Typescript'),
          new CheckBoxItem(2, 'Python'),
          new CheckBoxItem(3, 'C#'),
          new CheckBoxItem(0, 'Other')
        ]
      )
    ]
  }
}
