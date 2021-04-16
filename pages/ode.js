import Layout from "../components/layout";
import styles from "../styles/ode.module.css";
import { attributes } from "../content/ode.md";

export default function Ode() {
  //let { odePost } = attributes;
  console.log(attributes);
  return (
    <Layout page={"Ode"}>
      <div className={styles.background}></div>
    
    </Layout>
  );
}
