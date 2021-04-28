import Layout from "../components/layout";
import { attributes } from "../content/image.md";

export default function Image() {
  let { imagePost } = attributes;
  return (
    <Layout page={"Image"}>
      <div className="background"></div>
      {imagePost
        ? imagePost.map((post, k) => {
            return post.fullscreen ? (
              <div className="post" key={k}>
                <div className="post-image-container">
                <div
                  style={{
                    background: `url(/${post.image}) no-repeat center center`,
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "80vh",
                  }}
                ></div>
                </div>
                <div className="post-title-container">
                  <h2 className="post-title">{post.title}</h2>
                </div>
              </div>
            ) : (
              <div className="post" key={k}>
                <div
                  style={{
                    background: `url(/${post.image}) no-repeat center center`,
                    backgroundSize: "contain",
                    width: "100vw",
                    height: "80vh",
                  }}
                ></div>
                <div className="post-title-container">
                  <h2 className="post-title">{post.title}</h2>
                </div>
              </div>
            );
          })
        : null}

      <style jsx>{`
        .background {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background-color: white;          
        }
        .post {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          border: none;
          margin: 0;
          padding: 0;
        }
        .post-image-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 100vw;
          height: 90vh;
        }
        .post-title-container {
          background-color: white;
          width: 100vw;
          height: 10vh;
          display: flex;
          align-items: center;
          padding-left: 10vh;
          color: rgba(148, 148, 148, 1);
          z-index: 0;
        }
        .post-title {
          font-size: 1rem;
        }
        @media only screen and (max-width: 768px) {
          .post-title-container {
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
