export type IErrorMessageConfig = Record<string, ErrorType>;

type ErrorType = null | string | { message: string; interpolateParams: unknown };
