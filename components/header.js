import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";
import HeaderHomeAlone from "./headerHomeAlone"

export default function Header({ isHome }) {
  return (
    isHome ? (
    <header className={styles.header}>
      <div className={isHome ? styles.logo : styles.headingHidden}>
          <h1 className={styles.heading}>al redux</h1>
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
  ) : (<HeaderHomeAlone />))
}
