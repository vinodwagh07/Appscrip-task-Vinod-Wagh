"use client";
import styles from "./Footer.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const footerSections = [
  {
    id: "muse",
    title: "mettā muse",
    links: ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
  },
  {
    id: "quick",
    title: "QUICK LINKS",
    links: ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]
  }
];

export default function FooterLinks({ openSection, toggleSection }) {
  return (
    <div className={styles.footerBottomLinks}>
      {footerSections.map((section) => (
        <div key={section.id} className={styles.footerCol}>
          <div
            className={styles.colHeader}
            role="button"
            aria-expanded={openSection === section.id}
            aria-controls={`${section.id}-list`}
            onClick={() => toggleSection(section.id)}
          >
            <h3 className={styles.footerHeading}>{section.title}</h3>
            <span className={`${styles.arrow} ${openSection === section.id ? styles.arrowUp : ""}`}>
              <ChevronDownIcon className={styles.icon} />
            </span>
          </div>
          <ul
            id={`${section.id}-list`}
            className={`${styles.footerList} ${openSection === section.id ? styles.footerListOpen : ""}`}
          >
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className={styles.footerLink}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
