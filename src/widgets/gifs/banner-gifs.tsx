"use client";

import Image from "next/image";
import { ImageSwitcher } from "@/components/image-switcher";
import { baseURL } from "@/common/lib/http";
import { getBannerGifs } from "./queries";
import { useQuery } from "@tanstack/react-query";

export const BannerGifs = () => {
  const { data: gifs } = useQuery({
    queryKey: ["gifs"],
    queryFn: () => getBannerGifs(),
  });

  const srcs = gifs?.data?.map((item) => `${baseURL}/gif/${item.id}`) ?? [];

  return (
    <ImageSwitcher srcs={srcs}>
      {(src) => (
        <Image
          fill
          src={src}
          alt="header card"
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </ImageSwitcher>
  );
};
