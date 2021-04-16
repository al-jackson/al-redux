import Layout from "../components/layout";
import styles from "../styles/ode.module.css";
import { react as OdeContent } from "../content/ode.md";

export default function Ode() {
  return (
    <Layout page={"Ode"}>
      <div className={styles.background}></div>
      <section className={styles.odeContainer}>
        <OdeContent />
      </section>
    </Layout>
  );
}
