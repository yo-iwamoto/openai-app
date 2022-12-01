import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    reqBody: {
      text: string;
    };

    resBody: {
      urls: string[];
    };
  };
}>;
