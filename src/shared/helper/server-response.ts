export interface ServerResponse<T> {
  succeeded: boolean;
  error: string;
  errorCode: number;
  data: T;
}
