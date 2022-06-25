/**
 * Interface of Default Saga Action
 * Receive type of value return on payload.
 */
export interface DefaultSagaAction<T> {
  type: string;
  payload: T;
}
