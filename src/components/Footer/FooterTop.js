"use client";
import "@/styles/footer.css";
import { FaDiamond } from "react-icons/fa6";

export default function FooterTop() {
  return (
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
          <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter">
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
                <img id="currency-flag" src="images/us-flag.png" alt="US flag indicating currency USD" />
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
  );
}
