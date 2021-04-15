import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function HeaderLink({ href, children }) {
  const router = useRouter();

  function classNameFinder() {
    if (router.pathname === "/ode") {
      if (router.pathname === href) {
        return styles.claretNavItemSelected;
      } else return styles.claretNavItem;
    } else if (router.pathname === href) {
      return styles.navItemSelected;
    }
    return styles.navItem;
  }

  let className = classNameFinder();

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
