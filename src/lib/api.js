export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return await res.json();
  } catch (e) {
    return [];
  }
}
