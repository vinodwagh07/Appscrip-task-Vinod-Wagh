"use client";

import { useState, useCallback } from "react";
import FilterBar from "./FilterBar";
import ProductGrid from "./ProductGrid";

export default function ProductListing({ products }) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = useCallback(() => setShowFilters(prev => !prev), []);
  return (
    <div>
      <FilterBar
        count={products.length}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
      />

      <ProductGrid products={products} showFilters={showFilters} toggleFilters={toggleFilters}/>
    </div>
  );
}
