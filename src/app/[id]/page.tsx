import Image from "next/image";
import { getPostByIdQuery } from "./actions";
import { getImageURL } from "@/common/utils/image";

type PostPageProps = {
  params: {
    id: string;
  };
};
const PostPage = async ({ params }: PostPageProps) => {
  const { id } = params;

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
              ></div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Section Tittle */}
            <div className="section-tittle mb-40">
              <h3>Follow Us</h3>
            </div>
            {/* Flow Socail */}
            <div className="single-follow mb-45">
              <div className="single-box">
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img
                        src="assets/img/news/icon-fb.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img
                        src="assets/img/news/icon-tw.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img
                        src="assets/img/news/icon-ins.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img
                        src="assets/img/news/icon-yo.png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
              </div>
            </div>
            {/* New Poster */}
            <div className="news-poster d-none d-lg-block">
              <img
                src="assets/img/news/news_card.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
