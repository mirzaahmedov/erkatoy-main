"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        className="pb-10"
      >
        {Array.from({ length: 4 })
          .flatMap(() => postsData)
          .map((post, index) => (
            <SwiperSlide
              key={post.id + `${index}`}
              className="w-64 h-auto"
            >
              <PostListItem post={post} />
            </SwiperSlide>
          ))}
      </Swiper>
      <button
        aria-label="Previous slide"
        className="
          swiper-prev
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          flex items-center justify-center
          w-10 h-10 rounded-full
          bg-white text-gray-700
          shadow-[0_6px_16px_rgba(0,0,0,0.15)]
          transition-all duration-200
          hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]
          hover:scale-105
          active:scale-95
          disabled:opacity-80
          disabled:shadow-none
          disabled:cursor-not-allowed\
          disabled:hover:scale-100
        "
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        aria-label="Next slide"
        className="
          swiper-next
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          flex items-center justify-center
          w-10 h-10 rounded-full
          bg-white text-gray-700
          shadow-[0_6px_16px_rgba(0,0,0,0.15)]
          transition-all duration-200
          hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]
          hover:scale-105
          active:scale-95
          disabled:opacity-80
          disabled:shadow-none
          disabled:cursor-not-allowed
          disabled:hover:scale-100
        "
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
