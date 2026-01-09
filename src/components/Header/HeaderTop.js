"use client";
import styles from "./Header.module.css";
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
    <div className={styles.headerTop}>
      <div className={styles.menuBarLogo}>
        <button
          className={styles.menuBar}
          aria-label="Open menu"
        >
          <Bars3Icon />
        </button>

        <div className={styles.logo}>
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/plp-logo.webp"
              alt="Company Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>
      </div>

      <div className={styles.logoText}>LOGO</div>

      <div className={styles.headerIcons}>
        <div className={styles.headerIconsInner}>
          <button aria-label="Search">
            <MagnifyingGlassIcon className={styles.icon} />
          </button>
          <button aria-label="Wishlist">
            <HeartIcon className={styles.icon} />
          </button>
          <button aria-label="Cart">
            <ShoppingCartIcon className={styles.icon} />
          </button>
          <button
            aria-label="Profile"
            className={styles.profileBtn}
          >
            <UserIcon className={styles.icon} />
          </button>
        </div>

        <div className={styles.languageDropdown}>
          <button
            aria-label="Select Language"
            className={styles.langButton}
          >
            <span>ENG</span>
            <ChevronDownIcon className={styles.icon} />
          </button>

          <ul className={styles.langOptions}>
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
