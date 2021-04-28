import styles from "../styles/mobileNavModal.module.css";
import HeaderLink from "../components/headerLink";

export default function MobileNavModal({ toggleMenuModal, menuModalVisible }) {
  return (
    <nav className={styles.mobileNavModal}>
      <div className={styles.modalHeader}>
        <button onClick={() => toggleMenuModal(!menuModalVisible)}>
          <img
            className={styles.leaveModalIcon}
            src={"/img/x-out.svg"}
            alt="close menu"
          />
        </button>
      </div>
      <div className={styles.modalBody}>
        <HeaderLink href="/image">
          <a style={{fontSize: "2rem"}}>image</a>
        </HeaderLink>
        <HeaderLink href="/video">
          <a style={{fontSize: "2rem"}}>video</a>
        </HeaderLink>
        <HeaderLink href="/ode">
          <a style={{fontSize: "2rem"}}>ode</a>
        </HeaderLink>
        <HeaderLink href="/contact">
          <a style={{fontSize: "2rem"}}>contact</a>
        </HeaderLink>
        <HeaderLink href="/buy">
          <a style={{fontSize: "2rem"}}>buy</a>
        </HeaderLink>
      </div>
    </nav>
  );
}
