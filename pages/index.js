import Layout from "../components/layout";
import { attributes } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        
      </article>
    </Layout>
  );
}
