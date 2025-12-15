"use server";

import type { IApiResponse } from "@/entities";
import { client } from "@/common/lib/http";

export const getSidebarAds = async (categoryId?: number) => {
  const res = await client.get<IApiResponse<IAds[]>>(`/ads`, {
    params: {
      page: 1,
      limit: 100,
      category_id: categoryId,
    },
  });
  return res.data;
};

export interface IAds {
  id: number;
  title: string;
  description: string;
  type: "navbar" | "side";
  status: boolean;
  file: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  file_url: string;
}
