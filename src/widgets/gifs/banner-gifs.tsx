"use client";

import { ImageSwitcher } from "@/components/image-switcher";
import { getBannerGifs } from "./queries";
import { useQuery } from "@tanstack/react-query";

export const BannerGifs = () => {
  const { data: gifs } = useQuery({
    queryKey: ["gifs"],
    queryFn: () => getBannerGifs(),
  });

  const srcs = gifs?.data?.map((item) => `/images/gif/${item.id}`) ?? [];

  return (
    <ImageSwitcher srcs={srcs}>
      {(src) => (
        <img
          src={src}
          alt="header card"
          className="h-full w-auto rounded-md"
        />
      )}
    </ImageSwitcher>
  );
};
