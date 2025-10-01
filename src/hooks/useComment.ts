import { useMutation, useQuery } from "@tanstack/react-query";

import { IApiListResponse } from "@/entities";
import { client } from "@/common/lib/http";

export interface IComment {
  id: number;
  comment: string;
  reply_id: null;
  account_id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  post_id: number;
  email: string;
}

export const useComments = (postId: number) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const response = await client.get<IApiListResponse<IComment>>(
        "/comment",
        {
          params: {
            post_id: postId,
          },
        },
      );
      return response.data;
    },
  });
};

export interface ICommentCreatePayload {
  comment: string;
  reply_id: number | null;
  post_id: number;
}
export const useCommentCreate = () => {
  return useMutation({
    mutationFn: async (values: ICommentCreatePayload) => {
      const response = await client.post("/comment", values);
      return response.data;
    },
  });
};

export interface ICommentUpdatePayload {
  comment: string;
  reply_id: number | null;
}
export const useCommentUpdate = () => {
  return useMutation({
    mutationFn: async (values: {
      id: number;
      payload: ICommentUpdatePayload;
    }) => {
      const { id, payload } = values;
      const response = await client.put(`/comment/${id}`, payload);
      return response.data;
    },
  });
};

export const useCommentDelete = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await client.delete(`/comment/${id}`);
      return response.data;
    },
  });
};
