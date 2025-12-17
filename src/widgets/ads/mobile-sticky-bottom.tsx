"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { IAds, getSidebarAds } from "./action";
import { Swiper, SwiperSlide } from "swiper/react";

import { baseURL } from "@/common/lib/http";
import { useQuery } from "@tanstack/react-query";

export const MobileStickyBottomAds = () => {
  const { data: ads } = useQuery({
    queryKey: ["sidebar-ads"],
    queryFn: () => getSidebarAds(),
  });

  const items = ads?.data.filter((a) => a.type === "side" && a.is_active) ?? [];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white lg:hidden shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
      <div className="relative">
        <Swiper
          loop
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {items.map((ad, index) => (
            <SwiperSlide
              key={ad.id + `${index}`}
              className="h-auto"
            >
              <AdSlide ad={ad} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
const AdSlide = ({ ad }: { ad: IAds }) => {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={ad.file_url.replace(
            baseURL,
            "https://raqamli-manaviyat.uz/ayzek-back/api",
          )}
          alt={ad.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400">Reklama</p>
        <h4 className="text-sm font-semibold truncate">{ad.title}</h4>
        <p className="text-xs text-gray-500 line-clamp-2">{ad.description}</p>
      </div>

      {ad.cta_link && ad.cta_text && (
        <a
          href={ad.cta_link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            shrink-0
            rounded-full
            bg-blue-600
            px-3 py-1.5
            text-xs font-semibold
            text-white
            shadow
            hover:bg-blue-700
          "
        >
          {ad.cta_text}
        </a>
      )}
    </div>
  );
};
