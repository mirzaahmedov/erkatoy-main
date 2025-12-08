"use server";

import type { IApiResponse } from "@/entities";
import { client } from "@/common/lib/http";

export const getSidebarAds = async (categoryId?: number) => {
  const res = await client.get<
    IApiResponse<
      {
        file_url: string;
      }[]
    >
  >(`/ads`, {
    params: {
      page: 1,
      limit: 100,
      category_id: categoryId,
    },
  });
  return res.data;
};
