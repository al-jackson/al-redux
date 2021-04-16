import Layout from "../components/layout";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <Layout page={"Contact"}>
      <div className={styles.background}></div>
      <section className={styles.contactContainer}>
          <div className={styles.contactType}>
            <div className={styles.leftColumn}>
              <img
                src="/img/gmail-icon.png"
                alt="gmail icon"
                className={styles.gmailIcon}
              />
            </div>
            <div className={styles.rightColumn}>
              <p>alpauljackson@gmail.com</p>
            </div>
          </div>
        <div className={styles.contactType}>
          <div className={styles.leftColumn}>
            <img
              src="/img/insta-icon.png"
              alt="instagram icon"
              className={styles.instaIcon}
            />
          </div>
          <div className={styles.rightColumn}>
            <a href="https://instagram.com/al_redux/" alt="al's insta">
              al_redux
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
