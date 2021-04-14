import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function HeaderLink({ href, children }) {
  const router = useRouter();

  let className =
    router.pathname === href ? styles.navItemSelected : styles.navItem;

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
