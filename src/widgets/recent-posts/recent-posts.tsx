"use client";

import { PostCard } from "./post-card";
import { SideAds } from "../ads/side-ads";
import { getRecentPostListQuery } from "./actions";
import { useQuery } from "@tanstack/react-query";

export const RecentPosts = () => {
  const postsQuery = useQuery({
    queryKey: ["recent-posts"],
    queryFn: () => getRecentPostListQuery(),
  });

  const postsData = postsQuery.data?.data?.data ?? [];

  return (
    <div className="recent-articles flex">
      <div className="recent-wrapper min-w-md flex-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle mb-30 mt-30 ml-3">
              <h3>Recent Articles</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid grid-cols-[repeat(auto-fit,minmax(300px,500px))]">
            {/* <Swiper1
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination, Navigation]}
              > */}
            {Array.isArray(postsData)
              ? postsData.map((post) => (
                  // <SwiperSlide key={post.id}>
                  <PostCard
                    key={post.id}
                    post={post}
                  />
                  // </SwiperSlide>
                ))
              : null}
            {/* </Swiper> */}
          </div>
        </div>
      </div>
      <div className="w-64 xl:w-80">
        <SideAds />
      </div>
    </div>
  );
};
