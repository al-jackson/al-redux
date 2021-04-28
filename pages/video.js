import Layout from "../components/layout";
import styles from "../styles/video.module.css";
import { attributes } from "../content/video.md";

export default function Video() {
  let { videoPost } = attributes;
  return (
    <Layout page={"Video"}>
      <div className={styles.background}></div>
      {videoPost.map((video, k) => {
        return (
          <div className={styles.videoContainer} key={k}>
              <iframe
              className={styles.videoFrame}
                src={`https://www.youtube.com/embed/${video.url}?controls=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className={styles.videoTitle}>{video.title}</h2>
          </div>
        );
      })}
    </Layout>
  );
}
