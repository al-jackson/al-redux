import Layout from "../components/layout";
import styles from "../styles/buy.module.css";

export default function Buy() {
  return (
    <Layout page={"Buy"}>
      <div className={styles.background}>
        <section className={styles.buyContainer}>
          <p>Sometimes I produce one-off runs of my work in various forms,</p>
          <p>please check the link below for available items,</p>
          <a href="#" className={styles.buyLink}>shop</a>
        </section>
      </div>
    </Layout>
  );
}
