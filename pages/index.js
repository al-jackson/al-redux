import Layout from "../components/layout";
import { attributes } from "../content/home.md";

export default function Home() {
  let { title, cats } = attributes;
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}
