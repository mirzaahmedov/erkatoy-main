"use server";

import { IApiListResponse } from "@/entities";
import { IComment } from "./useComment";
import { client } from "@/common/lib/http";

export interface ICommentUpdatePayload {
  comment: string;
  reply_id: number | null;
}

export interface ICommentCreatePayload {
  comment: string;
  reply_id: number | null;
  post_id: number;
}

export const getComments = async (postId: number) => {
  "use server";
  const response = await client.get<IApiListResponse<IComment>>("/comment", {
    baseURL: "",
    params: {
      post_id: postId,
    },
  });
  return response.data;
};

export const createComment = async (values: ICommentCreatePayload) => {
  const response = await client.post("/comment", values);
  return response.data;
};

export const updateComment = async (values: {
  id: number;
  payload: ICommentUpdatePayload;
}) => {
  const { id, payload } = values;
  const response = await client.put(`/comment/${id}`, payload);
  return response.data;
};

export const deleteComment = async (id: number) => {
  const response = await client.delete(`/comment/${id}`);
  return response.data;
};
