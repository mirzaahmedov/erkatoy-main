"use client";

import { DesktopSideAds } from "../ads/desktop-side-ads";
import { PostCard } from "./post-card";
import { getRecentPostListQuery } from "./actions";
import { useQuery } from "@tanstack/react-query";

export const RecentPosts = () => {
  const postsQuery = useQuery({
    queryKey: ["recent-posts"],
    queryFn: () => getRecentPostListQuery(),
  });

  const postsData = postsQuery.data?.data?.data ?? [];

  return (
    <div className="recent-articles flex gap-10 2xl:gap-20">
      <div className="recent-wrapper min-w-md flex-1">
        <div className="mt-8 mb-4 flex items-center gap-4">
          <span className="block w-1.5 h-5 bg-blue-500 rounded-sm"></span>
          <h5 className="text-xl lg:text-2xl font-semibold text-gray-800 tracking-tight">
            So‘nggi maqolalar
          </h5>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,auto))]">
          {Array.isArray(postsData)
            ? postsData.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))
            : null}
        </div>
      </div>
      <aside className="w-80 hidden lg:block">
        <DesktopSideAds />
      </aside>
    </div>
  );
};
