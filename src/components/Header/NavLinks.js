"use client";
import "@/styles/header.css";
import Link from "next/link";
import { navLinks } from "../../constants/navLink";

export default function NavLinks() {
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
