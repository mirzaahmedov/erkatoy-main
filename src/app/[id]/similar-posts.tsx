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
    <div className="flex flex-col gap-2">
      {postsData.map((post) => (
        <a
          key={post.id}
          href={`/${post.id}`}
          className="flex gap-3 rounded overflow-hidden bg-transparent group px-1 py-2 relative transition-all duration-200 hover:bg-blue-50 hover:scale-[1.025] hover:shadow-lg"
        >
          <div className="relative w-32 h-20 sm:w-40 sm:h-24 flex-shrink-0 bg-gray-200">
            <Image
              src={getImageUrl(post.image)}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 min-w-0 py-1 pr-2">
            <h4 className="text-base font-semibold text-gray-900 mb-0.5 line-clamp-2 group-hover:text-blue-700 transition-colors">
              {post.title}
            </h4>
            <p className="text-xs text-gray-500 mb-0.5 flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              By <span className="font-medium text-gray-700">{post.fio}</span> •{" "}
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            {post.description && (
              <p className="text-xs text-gray-600 line-clamp-2">
                {post.description}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};
