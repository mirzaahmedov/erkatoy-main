import type { IPost } from "@/entities";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { getImageUrl } from "@/utils/image";
import { useState } from "react";

type PostListItemProps = {
  post: IPost;
};
export const PostListItem = ({ post }: PostListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/${post.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-full group flex flex-col rounded-lg overflow-hidden bg-white
             border border-gray-200 transition-all duration-200
             hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5"
    >
      <div className="relative w-full h-36 bg-gray-200">
        <Image
          unoptimized
          src={
            isHovered && post.gif
              ? getImageUrl(post.gif)
              : getImageUrl(post.image)
          }
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1 p-3">
        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {post.title}
        </h4>

        <span className="text-xs font-medium text-gray-700 line-clamp-1">
          {post.fio}
        </span>

        <span className="text-xs text-gray-500">
          {dayjs(post.created_at).format("DD.MM.YYYY")}
        </span>
      </div>
    </Link>
  );
};
