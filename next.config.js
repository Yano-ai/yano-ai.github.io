/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a basePath to deploy to a subdirectory like GitHub Pages.
  // For example, if your GitHub Pages URL is https://<username>.github.io/<repo-name>/
  // Set basePath to '/<repo-name>'.
  // For a user/organization page (e.g., https://<username>.github.io/), basePath is not needed.
  basePath: '', // Adjust this if your GitHub Pages URL includes a subdirectory
  images: {
    unoptimized: true, // Required for static export with Next.js 13+
  },
  outputFileTracingRoot: __dirname, // Fix workspace root detection
};

module.exports = nextConfig;
