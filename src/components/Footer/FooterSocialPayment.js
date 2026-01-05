"use client";
import "@/styles/footer.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const socialPlatforms = [
  { name: "Instagram", src: "/images/insta.png" },
  { name: "LinkedIn", src: "/images/linkedin.png" },
];

export default function FooterSocialPayment({ openSection, toggleSection }) {
  return (
    <div className="footer-social-payment">
      <div className="footer-col">
        <div
          className="col-header"
          role="button"
          aria-expanded={openSection === "follow"}
          aria-controls="follow-list"
          onClick={() => toggleSection("follow")}
        >
          <h3 className="footer-heading">FOLLOW US</h3>
          <span className={`arrow ${openSection === "follow" ? "up" : ""}`}>
            <ChevronDownIcon className="icon" />
          </span>
        </div>
        <div id="follow-list" className={`social-icons ${openSection === "follow" ? "open" : ""}`}>
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="icon-circle">
              <img src={platform.src} alt={`Follow mettā muse on ${platform.name}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="payment-section">
        <h3 className="footer-heading">mettā muse ACCEPTS</h3>
        <div className="payment-methods">
          <img id="payment-options" src="/images/payment-options.png" alt="Accepted payment options" />
        </div>
      </div>
    </div>
  );
}
