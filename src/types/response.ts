export type numberOpt = {
  value: number;
  label: string;
};

export type baseResponseObject = {
  value: number;
  label: string;
};

export type baseResponse<T = object> = {
  data?: T;
  message?: string;
  statusCode?: number;
};

export type GetAllResponse<T = object> = {
  message?: string;
  statusCode?: number;
  data: {
    count: number;
    countAll: number;
    totalPage: number;
    result: T[];
  };
};
