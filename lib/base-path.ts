/** Project site path on GitHub Pages. Keep this in sync with `basePath` in `next.config.ts`. */
export const basePath = "/leche4life-site";

/**
 * `next/image` with `images.unoptimized` does not prefix `src` with `basePath`.
 * Public files are still served under that path on GitHub Pages.
 */
export function publicPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
