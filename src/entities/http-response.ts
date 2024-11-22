type HTTPResponse<T> = {
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

export type { HTTPResponse };
