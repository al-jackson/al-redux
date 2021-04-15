import Layout from "../components/layout";
import styles from "../styles/contact.module.css";
// import Image from "next/image"
// import { attributes } from "../content/home.md";

export default function Contact() {
  //   let { HomeImage } = attributes;
  return (
    <Layout page={"Contact"}>
      <div className={styles.background}></div>
    </Layout>
  );
}
