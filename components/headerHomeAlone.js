import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";

export default function HeaderHomeAlone() {
  return (
    <header className={styles.header}>
        <div className={styles.headingHidden}>
          <h1 className={styles.heading}>al redux</h1>
        <img src="/img/long-nosed-boy.png" alt="logo" className={styles.boy} />
      </div>
      <nav className={styles.nav}>
        <HeaderLink href="/">
          <a>home</a>
        </HeaderLink>
      </nav>
    </header>
  );
}