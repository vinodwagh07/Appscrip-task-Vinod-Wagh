"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FiltersBar from "@/components/FiltersBar";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false);
  return (
  <section>
    <Hero />
    <FiltersBar showFilters={showFilters} setShowFilters={setShowFilters} />
    <ProductGrid showFilters={showFilters}/>
  </section>
  );
}
