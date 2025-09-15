import type { IPost } from "@/entities";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/image";

type PostCardProps = {
  post: IPost;
};
export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`${post.id}`}>
      <div className="single-recent mb-100">
        <div className="what-img">
          <Image
            src={getImageUrl(post.image)}
            alt={post.title}
            fill
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
