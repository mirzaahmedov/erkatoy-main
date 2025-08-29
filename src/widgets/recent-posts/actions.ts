"use server";

import type { IApiListResponse, IApiResponse, IPost } from "@/entities";
import { client } from "@/common/lib/http";

export const getRecentPostListQuery = async () => {
  const res = await client.get<IApiResponse<IApiListResponse<IPost>>>(
    "public/posts?page=1&limit=100",
  );
  return res.data;
};
