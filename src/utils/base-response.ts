export interface IBaseResponse {
  readonly success: boolean | undefined;
  readonly code: number | undefined;
  readonly message: string | undefined;
  readonly data: any;
  readonly details: any;
}
