"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  const pathname = usePathname(); // "/" or "/about"
  let pathParts = pathname.split("/").filter(Boolean);

  // Landing page: show "Shop" after Home
  if (pathname === "/") {
    pathParts = ["shop"]; // assignment: landing page is Shop
  }

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
      <ol className={styles.breadcrumbList}>
        {/* Home is always first */}
        <li>
          <Link className={styles.homeBreadcrumb} href="/">Home</Link>
        </li>

        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          const isLast = index === pathParts.length - 1;

          const formatted = part
            .split("-")
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

          return (
            <li key={href} className={styles.breadcrumbItem}>
              <span className={styles.separator}>|</span>
              {isLast ? (
                <span className={styles.current}>{formatted}</span>
              ) : (
                <Link href={href}>{formatted}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
