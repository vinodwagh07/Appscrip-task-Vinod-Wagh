import Hero from "@/components/Hero/Hero";
import ProductListingAsync  from "@/components/ProductListing/ProductListingAsync";
import ProductGridSkeleton from "@/components/ProductListing/ProductGridSkeleton";
import { getProducts } from "@/lib/api";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const productsPromise = getProducts();
  return (
    <section>
      <Hero />
      <Suspense fallback={<ProductGridSkeleton/>}>
        <ProductListingAsync  promise={productsPromise} />
      </Suspense>
    </section>
  );
}
