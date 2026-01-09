"use client";
import styles from "./Footer.module.css";
import { useState } from "react";
import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterSocialPayment from "./FooterSocialPayment";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* TOP SECTION */}
        <FooterTop />
        <hr className={styles.footerDivider} />

        {/* BOTTOM SECTION */}
        <section className={styles.footerBottom}>
          {/* Metta Muse and Quick Links */}
          <FooterLinks
            openSection={openSection}
            toggleSection={toggleSection}
          />

          {/* Social & Payment */}
          <div>
            <FooterSocialPayment
              openSection={openSection}
              toggleSection={toggleSection}
            />
          </div>
        </section>
      </div>
      <p className={`${styles.footerCopyright} ${styles.footerText}`}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
