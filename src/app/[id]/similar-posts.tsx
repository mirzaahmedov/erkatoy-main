"use client";

import { FC } from "react";
import Image from "next/image";
import { getImageUrl } from "@/utils/image";
import { getRecentPostListQuery } from "@/widgets/recent-posts/actions";
import { useQuery } from "@tanstack/react-query";

export interface ISimilarPostsProps {
  categoryId?: number;
}
export const SimilarPosts: FC<ISimilarPostsProps> = ({ categoryId }) => {
  const postsQuery = useQuery({
    queryKey: ["recent-posts", categoryId],
    queryFn: () => getRecentPostListQuery(categoryId),
  });

  const postsData = postsQuery.data?.data?.data ?? [];

  return (
    <div className="flex flex-col gap-5">
      {postsData.map((post) => (
        <div
          key={post.id}
          className="flex items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          {post.image && (
            <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden">
              <div className="what-img">
                <Image
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  fill
                />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
              {post.title}
            </h4>
            <p className="text-xs text-gray-500 mb-1">
              By {post.fio} on {new Date(post.created_at).toLocaleDateString()}
            </p>
            {post.description && (
              <p className="text-sm text-gray-700 line-clamp-1">
                {post.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
