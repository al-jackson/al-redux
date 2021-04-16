import Layout from "../components/layout";
import styles from "../styles/ode.module.css";
import { attributes } from "../content/ode.md";
import ReactMarkdown from "react-markdown"

export default function Ode() {
  let { odePost } = attributes;
  return (
    <Layout page={"Ode"}>
      <div className={styles.background}>
        {
          odePost.map((ode) => {
            //console.log(ode.text)
            <ReactMarkdown source={ode.text} />
          })
        }
      </div>
    </Layout>
  );
}
