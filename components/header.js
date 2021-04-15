import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";

export default function Header({ isHome }) {
  return (
    <header className={styles.header}>
      <div className={isHome ? styles.logo : styles.headingHidden}>
        <HeaderLink href="/">
          <h1>al redux</h1>
        </HeaderLink>
        <img src="/img/long-nosed-boy.png" alt="logo" className={styles.boy} />
      </div>
      <nav className={styles.nav}>
        <HeaderLink href="/image">
          <a>image</a>
        </HeaderLink>
        <HeaderLink href="/video">
          <a>video</a>
        </HeaderLink>
        <HeaderLink href="/ode">
          <a>ode</a>
        </HeaderLink>
        <HeaderLink href="/contact">
          <a>Contact</a>
        </HeaderLink>
        <HeaderLink href="/buy">
          <a>buy</a>
        </HeaderLink>
      </nav>
    </header>
  );
}
