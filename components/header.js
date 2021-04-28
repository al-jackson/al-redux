import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";
import HeaderHomeAlone from "./headerHomeAlone";
import MobileNav from "./mobileNav"
import React from "react";

export default function Header({ isHome }) {
  const [isDesktop, setDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768);
    }
    // eslint-disable-next-line
  }, []);

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    isHome ? (
    <header className={styles.header}>
      <div className={isHome ? styles.logo : styles.headingHidden}>
          <h1 className={styles.heading}>al redux</h1>
        <img src="/img/long-nosed-boy.png" alt="logo" className={styles.boy} />
      </div>
      {isDesktop ? (
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
          <a>contact</a>
        </HeaderLink>
        <HeaderLink href="/buy">
          <a>buy</a>
        </HeaderLink>
      </nav>) : (
        <MobileNav />
      )}
    </header>
  ) : (<HeaderHomeAlone />))
}
