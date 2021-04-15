import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";
import Image from "next/image";

export default function Header({ isHome }) {
  return (
    <header className={styles.header}>
      
      <div className={isHome? styles.logo: styles.headingHidden}>
        <HeaderLink href="/">
          <h1> 
          {/* className={isOde ? styles.claretHeading : styles.heading}> */}
            al redux
          </h1>
        </HeaderLink>
        <Image
          src={"/img/long-nosed-boy.png"}
          width={34}
          height={40}
          alt={"logo"}
        />
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
