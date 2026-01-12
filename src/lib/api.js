export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json",
      },
      next: { revalidate: 3600 }, // cache 1 hour
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
