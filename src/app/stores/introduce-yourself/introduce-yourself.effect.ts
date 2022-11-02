import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { IntroduceYourselfService } from "src/app/services/introduce-yourself.service";
import { getIntroduceYourselfAction, getIntroduceYourselfActionError, getIntroduceYourselfActionSuccess } from "./introduce-yourself.action";

@Injectable({ providedIn: 'root' })
export class IntroduceYourselfEffect {
  introduceYourself$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIntroduceYourselfAction),
      switchMap((data) =>
        this.service.getIntroduceYourself().pipe(
          map(response => {
            return getIntroduceYourselfActionSuccess({ response })
          }),
          catchError(() => of(getIntroduceYourselfActionError({ error: '' })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: IntroduceYourselfService
  ) {}
}
