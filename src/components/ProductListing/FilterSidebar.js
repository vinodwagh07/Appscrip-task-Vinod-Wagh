"use client";

import { useState } from "react";
import styles from "./FilterSidebar.module.css";
import {
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/solid";
import { IoMdClose } from "react-icons/io";
import { FILTER_CATEGORIES } from "@/constants/filterCategories";

export default function FilterSidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.isOpen : ""}`}
      inert={!isOpen}
      aria-hidden={!isOpen}
    >
      {/* Mobile Header */}
      <div className={styles.mobileSidebarHeader}>
        <span>Filters</span>
        {isOpen && <button
          onClick={onClose}
          aria-label="Close filters"
          className={styles.closeFilterBtn}
        >
          <IoMdClose />
        </button>}
      </div>

      <div className={styles.sidebarContent}>
        <div className={styles.customizableWrapper}>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>

        {FILTER_CATEGORIES.map((category) => (
          <FilterSection
            key={category.id}
            title={category.label}
            options={category.options}
          />
        ))}
      </div>
    </aside>
  );
}

function FilterSection({ title, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filterSectionItem}>
      <button
        className={styles.filterHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.filterGroup}>
          <span className={styles.filterTitle}>{title}</span>
          <p className={styles.filterAll}>All</p>
        </div>

        {open ? (
          <ChevronUpIcon className={styles.iconSm} />
        ) : (
          <ChevronDownIcon className={styles.iconSm} />
        )}
      </button>

      {open && (
        <div className={styles.filterOptions}>
          <button className={styles.unselectAll}>Unselect all</button>

          {options.map((opt) => (
            <div key={opt} className={styles.optionRow}>
              <input type="checkbox" id={opt} />
              <label htmlFor={opt}>{opt}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
