"use client";

import { useState } from "react";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle} title={product.title}>
          {product.title}
        </h3>

        <p className={styles.pricingText}>
          <span className={styles.underline}>Sign in</span> or Create an account
          to see pricing
        </p>

        <button
          className={styles.wishlistBtn}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={toggleWishlist}
        >
          {isWishlisted ? (
            <SolidHeartIcon
              className={`${styles.heartIcon} ${styles.filled}`}
            />
          ) : (
            <OutlineHeartIcon className={styles.heartIcon} />
          )}
        </button>
      </div>
    </article>
  );
}
