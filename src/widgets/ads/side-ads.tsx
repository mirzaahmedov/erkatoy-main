"use client";

import { IAds, getSidebarAds } from "./action";

import { useQuery } from "@tanstack/react-query";

export const SideAds = () => {
  const { data: ads } = useQuery({
    queryKey: ["sidebar-ads"],
    queryFn: () => getSidebarAds(),
  });

  return (
    <div className="w-full max-w-sm h-full flex flex-col gap-5">
      <div className="sticky top-0 py-10 overflow-hidden">
        <AdsContainer ads={ads?.data ?? []} />
      </div>
    </div>
  );
};

function AdsContainer({ ads }: { ads: IAds[] }) {
  const sideAds = ads.filter((a) => a.type === "side" && a.is_active);

  if (sideAds.length === 0) return null;

  return (
    <div className="space-y-4">
      {sideAds.map((ad) => (
        <div
          key={ad.id}
          className="bg-gray-100 p-4 rounded-lg shadow-sm"
        >
          <img
            src={ad.file_url}
            alt={ad.title || "Advertisement"}
            className="w-full h-auto rounded-md"
          />

          {ad.title && (
            <div className="mt-3 text-lg xl:text-2xl font-bold text-gray-800 leading-tight">
              {ad.title}
            </div>
          )}

          {ad.description && (
            <div className="mt-2 text-sm text-gray-600 leading-snug">
              {ad.description}
            </div>
          )}

          <a
            href="#"
            className="uppercase font-bold mt-3 block text-center bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 py-2 rounded-md transition-colors"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
}
