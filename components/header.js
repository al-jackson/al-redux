import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.heading}>al redux</h1>
        <Image
          src={"/img/long-nosed-boy.png"}
          width={32}
          height={40}
          alt={"logo"}
        />
      </div>
      <nav className={styles.nav}>
        <HeaderLink href="/">
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
