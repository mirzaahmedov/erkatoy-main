"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { PostCard } from "./post-card";
import { getRecentPostListQuery } from "./actions";
import { useQuery } from "@tanstack/react-query";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RecentPosts = () => {
  const postsQuery = useQuery({
    queryKey: ["recent-posts"],
    queryFn: getRecentPostListQuery,
  });

  const postsData = postsQuery.data?.data?.data ?? [];

  return (
    <div className="recent-articles">
      <div className="container">
        <div className="recent-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-30 mt-30 ml-3">
                <h3>Recent Articles</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {Array.isArray(postsData)
                  ? postsData.map((post) => (
                      <SwiperSlide key={post.id}>
                        <PostCard post={post} />
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RecentPosts };
