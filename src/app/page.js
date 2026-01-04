import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FiltersBar from "@/components/FiltersBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero/>
        <FiltersBar />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}
