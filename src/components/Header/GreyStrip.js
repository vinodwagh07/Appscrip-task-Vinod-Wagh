"use client";
import "@/styles/header.css";
import Image from "next/image";
import { greyItems } from "../../constants/greyStripItems";

export default function GreyStrip() {
  return (
    <div className="grey-strip">
      {greyItems.map((item, index) => (
        <div key={index} className="grey-item">
          <Image src={item.icon} alt="" width={18} height={18} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
