import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { RFormBuilder, TypeFormBuilder } from 'src/app/models/introduce-yourselft.model';
import { getIntroduceYourselfAction } from 'src/app/stores/introduce-yourself/introduce-yourself.action';
import { getIntroduceYourself } from 'src/app/stores/introduce-yourself/introduce-yourself.selector';

@Component({
  selector: 'review-my-answers',
  templateUrl: './review-my-answers.component.html',
  styleUrls: ['./review-my-answers.component.scss']
})
export class ReviewMyAnswersComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formBuilderItems$: Observable<RFormBuilder[]> = this.store.pipe(
    select(getIntroduceYourself),
    map(items => items as RFormBuilder[]),
    takeUntil(this.destroy$)
  );

  typeFormBuilder = TypeFormBuilder;

  constructor(
    private store: Store,
    private _router: Router
  ) {
    this.store.dispatch(getIntroduceYourselfAction());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  backToFormBuilder(): void {
    this._router.navigate(['/form/builder']);
  }
}
