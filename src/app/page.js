import Header from "@/components/Header";
import FiltersBar from "@/components/FiltersBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <FiltersBar />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}
