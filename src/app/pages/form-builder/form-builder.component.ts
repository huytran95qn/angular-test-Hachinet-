import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RFormBuilder, TypeFormBuilder } from 'src/app/models/introduce-yourselft.model';
import { AddNewQuestionService } from 'src/app/popups/add-new-question/add-new-question.service';
import { IntroduceYourselfService } from 'src/app/services/introduce-yourself.service';
import { getIntroduceYourselfAction } from 'src/app/stores/introduce-yourself/introduce-yourself.action';
import { getIntroduceYourself } from 'src/app/stores/introduce-yourself/introduce-yourself.selector';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formBuilderItems: RFormBuilder[] = [];

  typeFormBuilder = TypeFormBuilder;

  constructor(
    private store: Store,
    private _router: Router,
    private _introduceYourselfService: IntroduceYourselfService,
    private _addNewQuestionService: AddNewQuestionService
  ) {
    this.store.dispatch(getIntroduceYourselfAction());
  }

  ngOnInit(): void {
    this.getFormBuilderItems();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reviewMyAnswers(): void {
    this._router.navigate(['/form/answers']);
  }

  addNewQuestion(): void {
    this._addNewQuestionService.open();
  }

  updateValue(): void {
    this._introduceYourselfService.updateIntroduceYourself(this.formBuilderItems);
  }

  private getFormBuilderItems(): void {
    this.store.pipe(
      select(getIntroduceYourself),
      map(items => items as RFormBuilder[]),
      takeUntil(this.destroy$)
    ).subscribe(items => this.formBuilderItems = items);
  }
}
