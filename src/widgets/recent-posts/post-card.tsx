import type { IPost } from "@/entities";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/image";
import { useState } from "react";

type PostCardProps = {
  post: IPost;
};
export const PostCard = ({ post }: PostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`${post.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="single-recent mb-100">
        <div className="what-img">
          <Image
            src={
              isHovered && post.gif
                ? getImageUrl(post.gif)
                : getImageUrl(post.image)
            }
            alt={post.title}
            fill
            objectFit="cover"
            objectPosition="center"
            unoptimized
          />
        </div>
        <div className="what-cap">
          <span className="color1">{post.category_name}</span>
          <h4>
            <span>{post.title}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
};
