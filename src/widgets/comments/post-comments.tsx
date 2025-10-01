"use client";

import { useCommentCreate, useComments } from "@/hooks/useComment";

import { Button } from "@/components/button";
import { FC } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "@/stores/auth";
import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(Swal);

export interface PostCommentsProps {
  postId: number;
}
export const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const comments = useComments(postId);
  const commentCreate = useCommentCreate();
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  return (
    <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-gray-100">
      {isAuthenticated ? (
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
                  <div className="w-full flex items-center gap-2 mb-1">
                    <div className="block rounded-full overflow-hidden bg-primary text-white size-10">
                      {comment.email[0]?.toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {comment.email}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-800 text-sm pl-8">
                    {comment.comment}
                  </p>
                </div>
              ))
            )}
          </div>
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
            <textarea
              name="comment"
              placeholder="Izoh qoldiring..."
              className="resize-none rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 min-h-[60px]"
              required
              maxLength={500}
            />
            <div className="flex justify-end">
              <Button type="submit">Yuborish</Button>
            </div>
          </form>
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">
          Izoh qoldirish uchun tizimga kiring.
        </p>
      )}
    </div>
  );
};
