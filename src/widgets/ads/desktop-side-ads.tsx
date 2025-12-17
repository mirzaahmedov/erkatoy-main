"use client";

import { IAds, getSidebarAds } from "./action";
import { Swiper, SwiperSlide } from "swiper/react";

import { baseURL } from "@/common/lib/http";
import { useQuery } from "@tanstack/react-query";

export const DesktopSideAds = () => {
  const { data: ads } = useQuery({
    queryKey: ["sidebar-ads"],
    queryFn: () => getSidebarAds(),
  });

  return (
    <div className="w-full md:max-w-sm h-full flex flex-col gap-5">
      <div className="sticky top-0 md:py-10 overflow-hidden">
        <AdsContainer ads={ads?.data ?? []} />
      </div>
    </div>
  );
};

function AdsContainer({ ads }: { ads: IAds[] }) {
  const sideAds = ads.filter((a) => a.type === "side" && a.is_active);

  if (sideAds.length === 0) return null;

  return (
    <Swiper
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      direction="vertical"
      slidesPerView="auto"
    >
      {sideAds.map((ad) => (
        <SwiperSlide
          key={ad.id}
          className="flex flex-col gap-3 bg-white overflow-hidden border-t first:border-none"
        >
          <div className="w-full h-40 bg-gray-100 overflow-hidden">
            <img
              src={ad.file_url.replace(
                baseURL,
                "https://raqamli-manaviyat.uz/ayzek-back/api",
              )}
              alt={ad.title || "Advertisement"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 p-4 flex flex-col gap-2">
            <span className="text-xs text-gray-400 uppercase">Reklama</span>

            {ad.title && (
              <h3 className="text-lg font-semibold text-gray-800">
                {ad.title}
              </h3>
            )}

            {ad.description && (
              <p className="text-sm text-gray-600 line-clamp-3">
                {ad.description}
              </p>
            )}

            {ad.cta_link && ad.cta_text && (
              <a
                href={ad.cta_link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto
                  text-center
                  bg-blue-600 text-white font-semibold
                  py-2 rounded-full
                  shadow-md
                  hover:bg-blue-700
                  transition-colors
                "
              >
                {ad.cta_text}
              </a>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
