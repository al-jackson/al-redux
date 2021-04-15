import Layout from "../components/layout";
import Image from "next/image"
import { attributes } from "../content/home.md";


export default function Home() {
  let { HomeImage } = attributes;
  return (
    <Layout  page={"Home"}>
      <article>
        <h1>heyo</h1>
        <Image
        src={"/" + HomeImage}
        width={300}
        height={100}
        alt={"fuck u m8"} />
        <p>up yours child</p>
      </article>
    </Layout>
  );
}
