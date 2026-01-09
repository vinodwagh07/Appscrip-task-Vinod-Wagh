"use client";

import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products, showFilters, toggleFilters }) {
  return (
    <section>
      <div
        className={`${styles.mainLayoutContainer} ${
          showFilters ? styles.sidebarOpen : ""
        }`}
      >
        {/* Sidebar */}
        <FilterSidebar
          isOpen={showFilters}
          onClose={toggleFilters}
        />

        {/* Product Grid */}
        <main className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>

        {/* Mobile overlay */}
        <div className={styles.mobileOverlay} />
      </div>
    </section>
  );
}
