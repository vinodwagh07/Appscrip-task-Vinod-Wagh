"use client";

import styles from "./SortDropdown.module.css";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { SORT_OPTIONS } from "../../constants/filterOptions";

export default function SortDropdown({ selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentOption = SORT_OPTIONS.find((opt) => opt.value === selectedValue);

  return (
    <div className={styles.customDropdown}>
      <button
        className={styles.dropdownTrigger}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {currentOption?.label}
        {isOpen ? (
          <ChevronUpIcon className={styles.iconSm} />
        ) : (
          <ChevronDownIcon className={styles.iconSm} />
        )}
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu} role="listbox">
          {SORT_OPTIONS.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedValue === option.value}
              tabIndex={0}
              className={`${styles.dropdownItem} ${
                selectedValue === option.value ? styles.active : ""
              }`}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {selectedValue === option.value && (
                <CheckIcon className={styles.tickIcon} />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
