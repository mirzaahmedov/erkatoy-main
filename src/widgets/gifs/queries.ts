import type { IApiResponse } from "@/entities";
import { client } from "@/common/lib/http";

export const getBannerGifs = async () => {
  const res = await client.get<
    IApiResponse<
      {
        id: number;
      }[]
    >
  >(`/gif`, {
    params: {
      page: 1,
      limit: 100,
    },
  });
  return res.data;
};
