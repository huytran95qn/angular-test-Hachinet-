export enum GenericStoreStatusEnum {
  pending,
  loading,
  success,
  error,
  reset
}

export interface GenericState<T> {
  data: T | null;
  status: GenericStoreStatusEnum;
  error: string | null;
}
