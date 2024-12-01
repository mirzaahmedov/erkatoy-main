import Image from "next/image";
import { getPostByIdQuery } from "./actions";
import { getImageURL } from "@/common/utils/image";

type PostPageProps = {
  params: {
    id: string;
  };
};
const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;

  const post = await getPostByIdQuery(id);

  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="about-right mb-90">
              <div className="about-img">
                <Image
                  src={getImageURL(post?.data.imageurl)}
                  alt={post?.data.title}
                  width={1000}
                  height={500}
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: post?.data.content }}
                className="article-content"
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
