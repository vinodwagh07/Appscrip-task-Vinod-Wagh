// Mock API base URL for demo purposes (environment variable friendly)
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 60 }, // SSR with incremental revalidation
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
