"use client";
import "@/styles/footer.css";
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
    <div className="footer-bottom-links">
      {footerSections.map((section) => (
        <div key={section.id} className="footer-col">
          <div
            className="col-header"
            role="button"
            aria-expanded={openSection === section.id}
            aria-controls={`${section.id}-list`}
            onClick={() => toggleSection(section.id)}
          >
            <h3 className="footer-heading">{section.title}</h3>
            <span className={`arrow ${openSection === section.id ? "up" : ""}`}>
              <ChevronDownIcon className="icon" />
            </span>
          </div>
          <ul
            id={`${section.id}-list`}
            className={`footer-list ${openSection === section.id ? "open" : ""}`}
          >
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
