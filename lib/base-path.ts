/**
 * Path prefix for the deployed site. Empty when the site is served from the
 * domain root. Keep this in sync with `basePath` in `next.config.ts`.
 */
export const basePath = "";

/**
 * `next/image` with `images.unoptimized` does not prefix `src` with `basePath`.
 * Public files are served from the same prefix as the site.
 */
export function publicPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
