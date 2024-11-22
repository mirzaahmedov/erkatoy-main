"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { PostCard } from "./post-card";
import { getRecentPostListQuery } from "./actions";
import { useQuery } from "@tanstack/react-query";

const RecentPosts = () => {
  const { data: postList } = useQuery({
    queryKey: ["recent-posts"],
    queryFn: getRecentPostListQuery,
  });

  return (
    <div className="recent-articles">
      <div className="container">
        <div className="recent-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-30">
                <h3>Recent Articles</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <div className="recent-active dot-style d-flex dot-style"> */}
              <Swiper slidesPerView={3}>
                {Array.isArray(postList?.data)
                  ? postList.data.map((post) => (
                      <SwiperSlide key={post.id}>
                        <PostCard post={post} />
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RecentPosts };
