import ProductListing from "./index";
import { getProducts } from "@/lib/api";

export default async function ProductListingAsync() {
  const products = await getProducts();
  return <ProductListing products={products} />;
}
