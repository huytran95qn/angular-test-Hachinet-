import { createReducer, on } from "@ngrx/store";
import { RFormBuilder } from "src/app/models/introduce-yourselft.model";
import { GenericState, GenericStoreStatusEnum } from "../generic-state";
import { getIntroduceYourselfAction, getIntroduceYourselfActionError, getIntroduceYourselfActionSuccess } from "./introduce-yourself.action";

export const getIntroduceYourselfFeatureKey = 'GetIntroduceYourselfFeatureKey';

export interface GetIntroduceYourselfState extends GenericState<RFormBuilder[]> {};

const initialState: GetIntroduceYourselfState = {
  data: null,
  error: null,
  status: GenericStoreStatusEnum.pending
};

export const getIntroduceYourselfReducer = createReducer(
  initialState,
  on(getIntroduceYourselfAction, (state) => ({
    ...state,
    status: GenericStoreStatusEnum.loading,
    error: null
  })),
  on(getIntroduceYourselfActionSuccess, (state, { response }) => ({
    ...state,
    data: response,
    status: GenericStoreStatusEnum.success,
    error: null
  })),
  on(getIntroduceYourselfActionError, (state, { error }) => ({
    ...state,
    status: GenericStoreStatusEnum.error,
    error
  }))
);
