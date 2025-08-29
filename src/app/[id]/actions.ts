import type { HTTPResponse, IPost } from "@/entities";
import { client } from "@/common/lib/http";

export const getPostByIdQuery = async (id: string) => {
  const res = await client.get<HTTPResponse<IPost>>(`public/posts/${id}`);
  return res.data;
};
