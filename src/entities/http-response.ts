export type HTTPResponse<T> = {
  success: true;
  meta: {
    pageCount: number;
    count: number;
    currentPage: number;
    nextPage: number | null;
    backPage: number | null;
  };
  data: T;
};

export interface IApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface IApiListResponse<T> {
  data: T[];
  pagination: IPagination;
}
