import ProductListing from "./index";

export default async function ProductListingAsync({ promise }) {
  const products = await promise;
  return <ProductListing products={products} />;
}
