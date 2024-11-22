import type { HTTPResponse, Post } from "@/entities";
import { client } from "@/common/lib/http";

const getPostByIdQuery = async (id: string) => {
  const res = await client.get<HTTPResponse<Post>>(`user/panel/post/${id}`);
  return res.data;
};

export { getPostByIdQuery };
