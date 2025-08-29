import Image from "next/image";
import { getPostByIdQuery } from "./actions";
import { getImageUrl } from "@/utils/image";

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
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
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
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
