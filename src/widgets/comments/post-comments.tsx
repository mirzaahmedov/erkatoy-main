"use client";

import { Check, Edit, Trash2, X } from "lucide-react";
import { FC, useState } from "react";
import {
  useCommentCreate,
  useCommentDelete,
  useCommentUpdate,
  useComments,
} from "@/hooks/comment/useComment";

import { Button } from "@/components/button";
import Swal from "sweetalert2";
import { TextArea } from "@/components/textarea";
import { useAuthStore } from "@/stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(Swal);

export interface PostCommentsProps {
  postId: number;
}
export const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [commentValue, setCommentValue] = useState("");

  const queryClient = useQueryClient();
  const comments = useComments(postId);
  const commentCreate = useCommentCreate();
  const commentUpdate = useCommentUpdate();
  const commentDelete = useCommentDelete();
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const account = useAuthStore((store) => store.account);

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ["comments", postId],
    });
  };

  return (
    <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-gray-100">
      <div>
        <div className="mb-6">
          {comments.data?.data?.length === 0 ? (
            <p className="text-gray-400 italic text-center">
              Izohlar hali yo&apos;q. Birinchi bo&apos;lib izoh qoldiring!
            </p>
          ) : (
            comments.data?.data?.map((comment) => (
              <div
                key={comment.id}
                className="mb-4 pb-3 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-shrink-0 size-8 grid place-content-center rounded-full overflow-hidden bg-primary text-white">
                    {comment.email[0]?.toUpperCase()}
                  </div>
                  <span className="flex-1 text-sm text-gray-700 font-medium">
                    {comment.email}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </span>
                </div>
                {editingCommentId === comment.id ? (
                  <TextArea
                    name={`comment-${comment.id}`}
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                    className="w-full mt-2.5"
                  />
                ) : (
                  <p className="text-gray-800 text-sm pl-8">
                    {comment.comment}
                  </p>
                )}
                {comment.account_id === account?.id ? (
                  <div className="flex justify-end mt-2 gap-2.5">
                    {editingCommentId === comment.id ? (
                      <>
                        <button
                          onClick={() => {
                            setEditingCommentId(null);
                            setCommentValue("");
                          }}
                        >
                          <X className="size-5 text-gray-500 hover:text-primary" />
                        </button>
                        <button
                          onClick={() => {
                            commentUpdate.mutate(
                              {
                                id: comment.id,
                                payload: {
                                  comment: commentValue,
                                  reply_id: null,
                                },
                              },
                              {
                                onSuccess: () => {
                                  setEditingCommentId(null);
                                  setCommentValue("");
                                  swal.fire({
                                    title: "Success!",
                                    text: "Your comment has been updated.",
                                    icon: "success",
                                  });
                                  invalidateQueries();
                                },
                                onError: () => {
                                  swal.fire({
                                    title: "Error!",
                                    text: "There was an error updating your comment.",
                                    icon: "error",
                                  });
                                },
                              },
                            );
                          }}
                        >
                          <Check className="size-5 text-emerald-500 hover:text-primary" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingCommentId(comment.id);
                          setCommentValue(comment.comment);
                        }}
                      >
                        <Edit className="size-5 text-gray-500 hover:text-primary" />
                      </button>
                    )}
                    <button
                      onClick={() => {
                        swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                          preConfirm: () => {
                            commentDelete.mutate(comment.id, {
                              onSuccess: () => {
                                swal.fire({
                                  title: "Deleted!",
                                  text: "Your comment has been deleted.",
                                  icon: "success",
                                });
                                invalidateQueries();
                              },
                              onError: () => {
                                swal.fire({
                                  title: "Error!",
                                  text: "There was an error deleting your comment.",
                                  icon: "error",
                                });
                              },
                            });
                          },
                        });
                      }}
                    >
                      <Trash2 className="size-5 text-red-500 hover:text-primary" />
                    </button>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>

        {isAuthenticated ? (
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);
              const comment = formData.get("comment") as string;
              commentCreate.mutate(
                {
                  comment,
                  post_id: postId,
                  reply_id: null,
                },
                {
                  onSuccess: () => {
                    form.reset();
                    swal.fire({
                      title: "Success!",
                      text: "Your comment has been posted.",
                      icon: "success",
                    });
                    invalidateQueries();
                  },
                  onError: () => {
                    swal.fire({
                      title: "Error!",
                      text: "There was an error posting your comment.",
                      icon: "error",
                    });
                  },
                },
              );
            }}
          >
            <TextArea
              name="comment"
              placeholder="Izoh qoldiring..."
              required
              maxLength={500}
            />
            <div className="flex justify-end">
              <Button type="submit">Yuborish</Button>
            </div>
          </form>
        ) : (
          <p className="text-gray-500 text-center py-8">
            Izoh qoldirish uchun tizimga kiring.
          </p>
        )}
      </div>
    </div>
  );
};
