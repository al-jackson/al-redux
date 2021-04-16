import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { attributes } from "../content/home.md";

export default function Home() {
  let { HomeImage } = attributes;
  return (
    <Layout page={"Home"}>
      <article>
        <img
          src={"/" + HomeImage}
          alt="full screen homepage image"
          className={styles.homeImage}
        />
      </article>
    </Layout>
  );
}
