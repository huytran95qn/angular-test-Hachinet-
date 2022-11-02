import { createAction, props } from "@ngrx/store";
import { RFormBuilder } from "src/app/models/introduce-yourselft.model";

export const getIntroduceYourselfAction = createAction(
  '[Get Introduce Yourself]'
)

export const getIntroduceYourselfActionSuccess = createAction(
  '[Get Introduce Yourself Success]',
  props<{
    response: RFormBuilder[]
  }>()
);

export const getIntroduceYourselfActionError = createAction(
  '[Get Introduce Yourself Error]',
  props<{
    error: string
  }>()
);
