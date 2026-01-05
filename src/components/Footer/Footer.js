"use client";
import "@/styles/footer.css";
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
    <footer className="footer">
      <div className="footer-container">
        {/* TOP SECTION */}
        <FooterTop />
        <hr className="footer-divider" />

        {/* BOTTOM SECTION */}
        <section className="footer-bottom">
          {/* Metta Muse and Quick LInks */}
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
      <p className="footer-copyright footer-text">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
