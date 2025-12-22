"use client";

import NextVideo from "next-video/player";

type VideoPlayerProps = {
  url: string;
  title?: string;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  console.log({ url });
  return (
    <NextVideo
      src={url}
      crossOrigin="anonymous"
    />
  );
};
