import type { Post } from "@/entities";
import Image from "next/image";
import Link from "next/link";
import { getImageURL } from "@/common/utils/image";

type PostCardProps = {
  post: Post;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="single-recent mb-100">
      <div className="what-img">
        <Image
          src={getImageURL(post.imageurl)}
          alt={post.title}
          fill
        />
      </div>
      <div className="what-cap">
        <span className="color1">{post.category_name}</span>
        <h4>
          <Link href={`/${post.id}`}>{post.title}</Link>
        </h4>
      </div>
    </div>
  );
};

export { PostCard };
