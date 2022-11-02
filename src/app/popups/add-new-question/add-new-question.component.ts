import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map, Subject, takeUntil } from 'rxjs';
import { RFormBuilder, TypeFormBuilder } from 'src/app/models/introduce-yourselft.model';
import { PopupComponent, PopupRef } from 'src/app/models/popup/popup.model';
import { CheckBoxItem } from 'src/app/pages/form-builder/form-builder-checkbox/form-builder-checkbox.model';
import { IntroduceYourselfService } from 'src/app/services/introduce-yourself.service';

export enum AddNewQuestionControlName {
  questionType = 'questionType',
  question = 'question',
  answerOptions = 'answerOptions',
  allowUserToSpecifyTheirOwnAnswer = 'allowUserToSpecifyTheirOwnAnswer',
  fieldIsRequired = 'fieldIsRequired'
}

export class DropdownItem<T> {
  name!: string;
  value!: T;
}

type QuestionCheckboxType = DropdownItem<TypeFormBuilder>;

@Component({
  selector: 'add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.scss']
})
export class AddNewQuestionComponent implements PopupComponent<void, void>, OnInit ,OnDestroy {
  private destroy$: Subject<void> = new Subject()

  private ref!: PopupRef<void>;

  controlName = AddNewQuestionControlName;

  questionTypeList: QuestionCheckboxType[] = [
    {
      name: 'Paragraph',
      value: TypeFormBuilder.TextArea
    },
    {
      name: 'Checkbox',
      value: TypeFormBuilder.Checkbox
    }
  ];

  formGroup: FormGroup = new FormGroup({
    [this.controlName.questionType]: new FormControl(undefined, [Validators.required]),
    [this.controlName.question]: new FormControl(null, [Validators.required]),
    [this.controlName.answerOptions]: new FormControl(),
    [this.controlName.allowUserToSpecifyTheirOwnAnswer]: new FormControl(),
    [this.controlName.fieldIsRequired]: new FormControl(),
  });

  questionTypeEnum = TypeFormBuilder;

  constructor(
    private _introduceYourselfService: IntroduceYourselfService
  ) { }

  ngOnInit(): void {
    this.onChangeValue();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

  receiveData(): void {}

  receivePopupRef(ref: PopupRef<void>): void {
    this.ref = ref
  }

  onClose(): void {
    this.ref?.close();
  }

  onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.invalid) {
      return;
    }
    const questionTypeValue = this.formGroup.get(this.controlName.questionType)?.value as TypeFormBuilder;
    const questionValue = this.formGroup.get(this.controlName.question)?.value as string;
    const fieldIsRequiredValue = this.formGroup.get(this.controlName.fieldIsRequired)?.value as boolean;
    const allowUserToSpecifyTheirOwnAnswerValue = this.formGroup.get(this.controlName.allowUserToSpecifyTheirOwnAnswer)?.value as boolean;
    let formBuilder: RFormBuilder = new RFormBuilder(questionTypeValue, questionValue);
    formBuilder.required = fieldIsRequiredValue;
    formBuilder.allowUserToSpecifyTheirOwnAnswer = allowUserToSpecifyTheirOwnAnswerValue;
    switch (questionTypeValue) {
      case this.questionTypeEnum.Checkbox:
        let  answerOptionsValue = this.formGroup.get(this.controlName.answerOptions)?.value as CheckBoxItem[];
        answerOptionsValue.push(new CheckBoxItem(0, 'Other'));
        formBuilder.value = answerOptionsValue;
        break;

      case this.questionTypeEnum.TextArea:
        formBuilder.value = undefined;
        break;
    }
    this._introduceYourselfService.addIntroduceYourselfForm(formBuilder);
    this.onClose();
  }

  private onChangeValue(): void {
    this.formGroup.get(this.controlName.questionType)?.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(item => item as TypeFormBuilder)
    ).subscribe(type => {
      const answerOptionsControl = this.formGroup.get(this.controlName.answerOptions);
      answerOptionsControl?.reset();
      answerOptionsControl?.clearValidators();
      if(type === this.questionTypeEnum.Checkbox) {
        answerOptionsControl?.setValidators([this.answerOptionValidator()]);
      }
      answerOptionsControl?.updateValueAndValidity({ emitEvent: false });
    })
  }

  private answerOptionValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const answers = control.value as CheckBoxItem[] || [];
      if(answers && answers.length > 0) {
        const findAnswerInvalid = answers.some(answer => !answer.label);
        return findAnswerInvalid
          ? { answerOptionInvalid: true }
          : null
      }
      return { answerOptionInvalid: true };
    }
  }
}
