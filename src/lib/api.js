export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Unexpected data shape from products API:", data);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}
