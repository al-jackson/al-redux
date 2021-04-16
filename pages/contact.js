import Layout from "../components/layout";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <Layout page={"Contact"}>
      <div className={styles.background}></div>
      <section className={styles.contactContainer}>
        <div className={styles.contactType}>
          <img src="/img/gmail-icon.png" alt="gmail icon" className={styles.gmailIcon} />
          <p>alpauljackson@gmail.com</p>
        </div>
        <div className={styles.contactType}>
        <img src="/img/insta-icon.png" alt="instagram icon" className={styles.instaIcon} />
          <a href="https://instagram.com/al_redux/" alt="al's insta">
            al_redux
          </a>
        </div>
      </section>
    </Layout>
  );
}
