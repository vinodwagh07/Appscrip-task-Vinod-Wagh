const API_BASE_URL =
  process.env.API_BASE_URL || "https://fakestoreapi.com";

export async function getProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      cache: "no-store", // ✅ IMPORTANT for Netlify SSR
    });

    if (!res.ok) {
      console.error("API error:", res.status);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}
