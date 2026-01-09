"use client";
import styles from "./Footer.module.css";
import { FaDiamond } from "react-icons/fa6";

export default function FooterTop() {
  return (
    <section className={styles.footerTop}>
      <div className={`${styles.newsletter} ${styles.bottomBorder}`}>
        <div className={styles.newsletterTop}>
          <h3 className={styles.footerHeading}>BE THE FIRST TO KNOW</h3>
          <p className={styles.footerSubtext}>Sign up for updates from mettā muse.</p>
          <p className={styles.footerMobileSubtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
          </p>
        </div>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input type="email" className={styles.newsletterInput} placeholder="Enter your e-mail..." />
          <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe to newsletter">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className={styles.footerMeta}>
        <div className={`${styles.footerContact} ${styles.bottomBorder}`}>
          <h3 className={styles.footerWebContact}>CONTACT US</h3>
          <h3 className={styles.footerMobileContact}>CALL US</h3>
          <div className={styles.contactDetails}>
            <p className={styles.footerText}>+44 221 133 5360</p>
            <span className={styles.mobileSeparator}>♦</span>
            <p className={styles.footerText}>customercare@mettamuse.com</p>
          </div>
        </div>

        <div className={styles.footerCurrency}>
          <h3 className={styles.footerHeading}>CURRENCY</h3>
          <div className={styles.currencyGroup}>
            <div className={styles.currencyIndicator}>
              <div>
                <img id={styles.currencyFlag} src="images/us-flag.webp" alt="US flag indicating currency USD" />
              </div>
              <FaDiamond id={styles.diamondIcon} />
              <h4 className={styles.currencyCode}>USD</h4>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
