import Layout from "../components/layout";
// import Image from "next/image"
import { attributes } from "../content/home.md";


export default function Home() {
  let { HomeImage } = attributes;
  return (
    <Layout  page={"Home"}>
      <article>
        <img src={"/" + HomeImage} alt="fuck u m8" />
      </article>
    </Layout>
  );
}
