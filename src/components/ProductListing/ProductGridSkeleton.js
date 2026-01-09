// ProductGridSkeleton.js
import ProductCardSkeleton from "./ProductCardSkeleton";
import styles from "./ProductGridSkeleton.module.css"; // new file

export default function ProductGridSkeleton({ count = 20 }) {
  return (
    <div className={styles.gridWrapper}>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
