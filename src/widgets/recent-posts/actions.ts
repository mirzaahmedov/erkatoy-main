"use server";

import type { IApiListResponse, IApiResponse, IPost } from "@/entities";

import { client } from "@/common/lib/http";

export const getRecentPostListQuery = async (categoryId?: number) => {
  const res = await client.get<IApiResponse<IApiListResponse<IPost>>>(
    `/public/posts`,
    {
      params: {
        page: 1,
        limit: 100,
        category_id: categoryId,
      },
    },
  );
  return res.data;
};
