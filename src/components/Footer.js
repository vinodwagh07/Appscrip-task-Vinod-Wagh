"use client";
import "@/styles/footer.css";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FaDiamond } from "react-icons/fa6";

const museLinks = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"];
const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TOP SECTION */}
        <section className="footer-top">
          <div className="newsletter bottom-border">
            <div className="newletter-top">
              <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
              <p className="footer-subtext">Sign up for updates from mettā muse.</p>
              <p className="footer-mobile-subtext">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Enter your e-mail..." />
              <button type="submit" className="newsletter-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-meta">
            <div className="footer-contact bottom-border">
              <h3 className="footer-heading footer-web-contact">CONTACT US</h3>
              <h3 className="footer-mobile-contact footer-heading">CALL US</h3>
              <div className="contact-details">
                <p className="footer-text">+44 221 133 5360</p>
                <span className="mobile-separator">♦</span>
                <p className="footer-text">customercare@mettamuse.com</p>
              </div>
            </div>

            <div className="footer-currency">
              <h3 className="footer-heading">CURRENCY</h3>
              <div className="currency-group">
                <div className="currency-indicator">
                  <div>
                    <img id="currency-flag" src="images/us-flag.png" alt="US" />
                  </div>
                  <FaDiamond id="diamond-icon" />
                  <h4 className="currency-code">USD</h4>
                </div>
                <p className="currency-note">
                  Transactions will be completed in Euros and a currency reference is available on hover.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="footer-divider" />

        {/* BOTTOM SECTION */}
        <section className="footer-bottom">
          {/* Mettā Muse Column */}
          <div className="footer-bottom-links">
            <div className="footer-col">
              <div className="col-header" onClick={() => toggleSection("muse")}>
                <h3 className="footer-heading">mettā muse</h3>
                <span className={`arrow ${openSection === "muse" ? "up" : ""}`}>
                  <ChevronDownIcon className="icon" />
                </span>
              </div>
              <ul className={`footer-list ${openSection === "muse" ? "open" : ""}`}>
                {museLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <div className="col-header" onClick={() => toggleSection("quick")}>
                <h3 className="footer-heading">QUICK LINKS</h3>
                <span className={`arrow ${openSection === "quick" ? "up" : ""}`}>
                  <ChevronDownIcon className="icon" />
                </span>
              </div>
              <ul className={`footer-list ${openSection === "quick" ? "open" : ""}`}>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Payment */}
          <div className="footer-social-payment">
            <div className="footer-col">
              <div className="col-header" onClick={() => toggleSection("follow")}>
                <h3 className="footer-heading">FOLLOW US</h3>
                <span className={`arrow ${openSection === "follow" ? "up" : ""}`}>
                  <ChevronDownIcon className="icon" />
                </span>
              </div>
              <div className={`social-icons ${openSection === "follow" ? "open" : ""}`}>
                <div className="icon-circle">
                  <img src="/images/insta.png" alt="Instagram" />
                </div>
                <div className="icon-circle">
                  <img id="social-icon" src="/images/linkedin.png" alt="Instagram" />
                </div>
              </div>
            </div>

            <div className="payment-section">
              <h3 className="footer-heading">mettā muse ACCEPTS</h3>
              <div className="payment-methods">
                <img id="payment-options" src="/images/payment-options.png" alt="Payment Options" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <p className="footer-copyright footer-text">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
}