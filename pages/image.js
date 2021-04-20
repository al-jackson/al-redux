import Layout from "../components/layout";
import { attributes } from "../content/image.md";

export default function Image() {
  let { imagePost } = attributes;
  console.log(imagePost)
  return (
    <Layout page={"Image"}>
      {imagePost
        ? imagePost.map((post, k) => {
            return (
              <div className="post" key={k}>
                <div
                  style={{
                    background: `url(/${post.image}) no-repeat center center`,
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "90vh"
                  }}
                >
                </div>
                <div className="post-title-container">
                  <h2 className="post-title">{post.title}</h2>
                </div>
              </div>
            );
          })
        : null}

      <style jsx>{`
        .post {
          display: flex;
          flex-direction: column;
          position: relative;
          border: none;
          margin: 0;
          padding: 0;
        }
        .post-title-container {
          background-color: rgba(148, 148, 148, 0.7);
          width: 100vw;
          height: 10vh;
          display: flex;
          align-items: center;
          padding-left: 25px;
          color: white;
          z-index: 1;
        }
      `}</style>
    </Layout>
  );
}
