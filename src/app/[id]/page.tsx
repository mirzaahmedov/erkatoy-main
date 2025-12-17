import { DesktopSideAds } from "@/widgets/ads/desktop-side-ads";
import Image from "next/image";
import { MobileHeaderAds } from "@/widgets/ads/mobile-header";
import { PostComments } from "@/widgets/comments/post-comments";
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
      <div className="container pt-5">
        <MobileHeaderAds />
        <div className="flex gap-10 2xl:gap-20">
          <div className="flex-1 overflow-hidden pb-10 space-y-10">
            <div className="about-right md:mb-90 ql-snow">
              <div className="about-img mt-30">
                <Image
                  unoptimized
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

            <div className="py-5">
              <div className="mb-4 flex items-center gap-4">
                <span className="block w-1.5 h-5 bg-blue-500 rounded-sm"></span>
                <h5 className="text-xl lg:text-2xl font-semibold text-gray-800 tracking-tight">
                  O&apos;xshash maqolalar
                </h5>
              </div>
              <SimilarPosts categoryId={post?.data.category_id} />
            </div>

            <PostComments postId={post.data?.id} />
          </div>

          <aside className="flex-shrink-0 w-80 hidden lg:block">
            <DesktopSideAds />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
