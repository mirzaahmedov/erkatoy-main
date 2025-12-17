import {
  ICommentCreatePayload,
  ICommentUpdatePayload,
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "./actions";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    queryFn: () => getComments(postId),
  });
};

export const useCommentCreate = () => {
  return useMutation({
    mutationFn: (values: ICommentCreatePayload) => createComment(values),
  });
};

export const useCommentUpdate = () => {
  return useMutation({
    mutationFn: (values: { id: number; payload: ICommentUpdatePayload }) =>
      updateComment(values),
  });
};

export const useCommentDelete = () => {
  return useMutation({
    mutationFn: (id: number) => deleteComment(id),
  });
};
