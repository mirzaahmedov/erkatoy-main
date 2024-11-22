"use server";

import type { HTTPResponse, Post } from "@/entities";
import { client } from "@/common/lib/http";

const getRecentPostListQuery = async () => {
  const res = await client.get<HTTPResponse<Post[]>>(
    "user/panel/post?page=1&limit=100",
  );
  return res.data;
};

export { getRecentPostListQuery };
