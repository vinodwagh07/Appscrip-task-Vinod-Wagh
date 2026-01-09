"use client";
import styles from "./Footer.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const socialPlatforms = [
  { name: "Instagram", src: "/images/insta.webp" },
  { name: "LinkedIn", src: "/images/linkedin.webp" },
];

export default function FooterSocialPayment({ openSection, toggleSection }) {
  return (
    <div className={styles.footerSocialPayment}>
      <div className={styles.footerCol}>
        <div
          className={styles.colHeader}
          role="button"
          aria-expanded={openSection === "follow"}
          aria-controls="follow-list"
          onClick={() => toggleSection("follow")}
        >
          <h3 className={styles.footerHeading}>FOLLOW US</h3>
          <span className={`${styles.arrow} ${openSection === "follow" ? styles.arrowUp : ""}`}>
            <ChevronDownIcon className={styles.icon} />
          </span>
        </div>
        <div id="follow-list" className={`${styles.socialIcons} ${openSection === "follow" ? styles.socialIconsOpen : ""}`}>
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className={styles.iconCircle}>
              <img src={platform.src} alt={`Follow mettā muse on ${platform.name}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.paymentSection}>
        <h3 className={styles.footerHeading}>mettā muse ACCEPTS</h3>
        <div className={styles.paymentMethods}>
          <img id={styles.paymentOptions} src="/images/payment-options.webp" alt="Accepted payment options" />
        </div>
      </div>
    </div>
  );
}
