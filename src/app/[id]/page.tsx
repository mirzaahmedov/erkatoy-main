import Image from "next/image";
import { PostComments } from "@/widgets/comments/post-comments";
import { SideAds } from "@/widgets/ads/side-ads";
import { SimilarPosts } from "./similar-posts";
import { getImageUrl } from "@/utils/image";
import { getPostByIdQuery } from "./actions";

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};
const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;

  const post = await getPostByIdQuery(id);

  return (
    <div className="about-area">
      <div className="container flex gap-10">
        <div className="flex-1">
          <div className="about-right mb-90 ql-snow">
            <div className="about-img mt-30">
              <Image
                src={getImageUrl(post?.data.image)}
                alt={post?.data.title}
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post?.data.content }}
              className="mt-30 ql-editor"
            ></div>
          </div>
        </div>

        <div className="w-64 xl:w-80">
          <SideAds />
        </div>
      </div>

      <div className="container">
        <div className="col-lg-12 h-full sticky top-0 py-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="block w-1.5 h-5 bg-blue-500 rounded-sm"></span>
            <h5 className="text-lg font-semibold text-gray-800 tracking-tight">
              O&apos;xshash maqolalar
            </h5>
          </div>
          <SimilarPosts categoryId={post?.data.category_id} />
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8">
            <PostComments postId={post.data?.id} />
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
