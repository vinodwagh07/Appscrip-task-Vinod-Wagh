"use client";
import "@/styles/header.css";

import GreyStrip from "./GreyStrip";
import HeaderTop from "./HeaderTop";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header>
      {/* grey-strip-bar */}
      <GreyStrip />
      <div className="header-container">
        <HeaderTop />
        <NavLinks />
      </div>
    </header>
  );
}
