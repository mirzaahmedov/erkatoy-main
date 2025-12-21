"use client";

import ReactPlayer from "react-player";
import { useState } from "react";

type VideoPlayerProps = {
  url: string;
  title?: string;
};

export const VideoPlayer = ({ url, title }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  console.log("Video URL:", url);

  const handlePlay = () => {
    setPlaying(true);
    setShowPreview(false);
  };

  return (
    <div className="mb-8 relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-700">
      <div className="relative aspect-video group">
        {showPreview && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 hover:bg-black/40">
            <button
              onClick={handlePlay}
              className="flex items-center justify-center w-20 h-20 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-2xl"
            >
              <svg
                className="w-8 h-8 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            {title && (
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold drop-shadow-lg line-clamp-2">
                  {title}
                </h3>
              </div>
            )}
          </div>
        )}

        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          playing={playing}
          stopOnUnmount={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          config={{
            youtube: {
              playerVars: {
                showinfo: 1,
                rel: 0,
                modestbranding: 1,
              },
            },
            vimeo: {
              playerOptions: {
                color: "3B82F6",
                title: false,
                portrait: false,
                byline: false,
              },
            },
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="rounded-xl"
        />
      </div>

      {/* Custom gradient overlay for better visual integration */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};
