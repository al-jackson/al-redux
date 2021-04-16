import Layout from "../components/layout";
import { attributes } from "../content/home.md";

export default function Home() {
  let { HomeImage } = attributes;
  return (
    <Layout page={"Home"}>
      <div className="homeImage"></div>
      <style jsx>{`
        .homeImage {
          background: url(/${HomeImage}) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        }
      `}</style>
    </Layout>
  );
}
