import "@/styles/header.css";

import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { navLinks } from "../constants/navLink";
import { languages } from "../constants/languages";
import { greyItems } from "../constants/greyStripItems";

export default function Header() {
  return (
    <header>
      {/* grey-strip-bar */}
      <div className="grey-strip">
        {greyItems.map((item, index) => (
          <div key={index} className="grey-item">
            <img className="grey-strip-icon" src={item.icon} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="header-container">
        {/* Top section: logo and action icons */}

        <div className="header-top">
          <div className="menuBar-logo">
            <button id="menu-bar" aria-label="menu-bar">
              <Bars3Icon />
            </button>
            <div className="logo">
              <img src="/images/Logo.png" alt="Company Logo" />
            </div>
          </div>

          <div>
            <h2 id="text-logo">LOGO</h2>
          </div>

          <div className="header-icons">
            <div id="header-icons">
              <button aria-label="Search">
                <MagnifyingGlassIcon className="icon" />
              </button>
              <button aria-label="Wishlist">
                <HeartIcon className="icon" />
              </button>
              <button aria-label="Cart">
                <ShoppingCartIcon className="icon" />
              </button>
              <button aria-label="Profile" id="profile-btn">
                <UserIcon className="icon" />
              </button>
            </div>

            {/* Language dropdown */}
            <div className="language-dropdown">
              <button aria-label="Select Language" className="lang-button">
                <span>ENG</span> <ChevronDownIcon className="icon" />
              </button>

              {/* Dropdown options (hidden by default, show on hover/click) */}
              <ul className="lang-options">
                {languages.map((lang, index) => (
                  <li key={index}>
                    <button>{lang.code}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
