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
  type: string;
  status: boolean;
  file: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  cta_link: string | null;
  cta_text: string | null;
  file_url: string;
}
