import Hero from "@/components/Hero/Hero";
import PLPContainer from "@/components/ProductListingContainer";
import { getProducts } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <section>
      <Hero />
      <PLPContainer products={products} />
    </section>
  );
}
