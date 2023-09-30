/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  reactStrictMode: true,
  output: "export",
};

export default config;
