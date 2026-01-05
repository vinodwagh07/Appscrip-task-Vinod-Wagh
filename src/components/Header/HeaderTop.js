"use client";
import "@/styles/header.css";
import Link from "next/link";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { languages } from "../../constants/languages";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="menuBar-logo">
        <button id="menu-bar" aria-label="Open menu">
          <Bars3Icon />
        </button>
        <div className="logo">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/Logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>
      </div>

      <div className="logo-text">LOGO</div>

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

        <div className="language-dropdown">
          <button aria-label="Select Language" className="lang-button">
            <span>ENG</span> <ChevronDownIcon className="icon" />
          </button>

          <ul className="lang-options">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button>{lang.code}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
