import styles from "../styles/header.module.css";
import MobileNavModal from "./mobileNavModal";
import React from "react";

export default function MobileNav() {
  const [menuModalVisible, toggleMenuModal] = React.useState(false);
  return (
    <nav>
      {menuModalVisible && (
        <MobileNavModal
          toggleMenuModal={toggleMenuModal}
          menuModalVisible={menuModalVisible}
        />
      )}
      <button onClick={() => toggleMenuModal(!menuModalVisible)}>
        <img
          src="/img/burger.svg"
          alt="burger icon"
          className={styles.burger}
        />
      </button>
    </nav>
  );
}
