import fetch from "node-fetch";

/**
 * Checks if the given image URL is publicly accessible, is an image, and is at least 10KB.
 * Returns true if HTTP 200, content-type starts with image/, and size > 10KB.
 */
export async function isValidImageUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) return false;
    const contentType = res.headers.get("content-type");
    if (!contentType?.startsWith("image/")) return false;
    const buf = await res.arrayBuffer();
    const minLength = 10 * 1024; // 10KB
    return buf.byteLength > minLength;
  } catch {
    return false;
  }
}
