"use client";
import styles from "./Header.module.css";

import GreyStrip from "./GreyStrip";
import HeaderTop from "./HeaderTop";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* grey-strip-bar */}
      <GreyStrip />
      <div className={styles.headerContainer}>
        <HeaderTop />
        <NavLinks />
      </div>
    </header>
  );
}
