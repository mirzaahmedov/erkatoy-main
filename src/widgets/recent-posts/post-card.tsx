import type { IPost } from "@/entities";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/image";

type PostCardProps = {
  post: IPost;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
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
          <Link href={`/${post.id}`}>{post.title}</Link>
        </h4>
      </div>
    </div>
  );
};

export { PostCard };
