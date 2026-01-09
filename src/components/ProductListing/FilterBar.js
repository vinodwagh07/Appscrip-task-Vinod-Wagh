"use client";

import styles from "./FilterBar.module.css";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import SortDropdown from "./SortDropdown";

export default function FiltersBar({ count, showFilters, toggleFilters }) {
  const [sortBy, setSortBy] = useState("recommended");

  return (
    <section className={styles.filterSection} >
      <div className={styles.filterControls}>
        <div className={styles.controlsLeft}>
          <span className={styles.itemsCount}>{count} ITEMS</span>

          <button
            onClick={toggleFilters}
            className={styles.toggleBtn}
            aria-expanded={showFilters}
            aria-label={showFilters ? "Hide filters" : "Show filters"}
          >
            {showFilters ? (
              <ChevronLeftIcon className={styles.iconSm} />
            ) : (
              <ChevronRightIcon className={styles.iconSm} />
            )}
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>

          <button
            className={styles.mobileFilterBtn}
            onClick={toggleFilters}
          >
            FILTER
          </button>
        </div>
        {/* SORT FILTERS AND OPTIONS */}
        <div className={styles.controlsRight}>
          <SortDropdown selectedValue={sortBy} onSelect={setSortBy} />
        </div>
      </div>
    </section>
  );
}
