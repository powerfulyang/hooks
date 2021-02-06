export type ReqOptions<T> = {
  url: string;
  immediately?: boolean;
  body?: BodyInit;
  query?: Record<string, string>;
  defaultResponse?: T;
  runCase?: boolean;
  resTransform?: (res: Response) => T;
};
