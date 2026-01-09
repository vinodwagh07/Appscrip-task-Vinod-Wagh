"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { greyItems } from "../../constants/greyStripItems";

export default function GreyStrip() {
  return (
    <div className={styles.greyStrip}>
      {greyItems.map((item, index) => (
        <div key={index} className={styles.greyItem}>
          <Image src={item.icon} alt="" width={18} height={18} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
