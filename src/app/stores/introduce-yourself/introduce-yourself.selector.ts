import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getIntroduceYourselfFeatureKey, GetIntroduceYourselfState } from "./introduce-yourself.reducer";

export const getIntroduceYourselfState = createFeatureSelector<GetIntroduceYourselfState>(
  getIntroduceYourselfFeatureKey
);

export const getIntroduceYourself = createSelector(getIntroduceYourselfState,
  (s) => s.data
);

