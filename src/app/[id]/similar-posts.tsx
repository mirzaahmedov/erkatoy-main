"use client";

import { FC } from "react";
import { PostListItem } from "@/widgets/recent-posts/post-card-list";
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
    <div className="flex flex-wrap gap-5">
      {postsData.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};
