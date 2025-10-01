import type { IPost } from "@/entities";
import Image from "next/image";
import Link from "next/link";
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
      className="flex gap-0 rounded overflow-hidden bg-transparent group px-1 py-2 relative transition-all duration-200 hover:bg-gray-50 hover:scale-[1.01] border border-transparent hover:border-blue-200"
    >
      <div className="relative w-32 h-20 sm:w-40 sm:h-24 flex-shrink-0 bg-gray-200">
        <Image
          src={isHovered ? getImageUrl(post.gif) : getImageUrl(post.image)}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-100 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center px-2">
        <span className="block w-0.5 h-12 bg-blue-100 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center flex-1 min-w-0 py-1 pr-2">
        <h4 className="text-base font-semibold text-gray-900 mb-0.5 line-clamp-2 transition-colors">
          {post.title}
        </h4>
        <p className="text-xs text-gray-500 mb-0.5 flex flex-col items-center gap-1">
          <span className="block w-full font-medium text-gray-700">
            {post.fio}
          </span>
          <span className="block w-full">
            {new Date(post.created_at).toLocaleDateString()}
          </span>
        </p>
      </div>
    </Link>
  );
};
