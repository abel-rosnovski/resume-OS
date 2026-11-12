/** @type {import('next').NextConfig} */

// The old site had one page per topic. Send those links to the matching section.
const moved = {
  "/summary": "/#top",
  "/elevato": "/#elevato",
  "/growth": "/#elevato",
  "/automation": "/#systems",
  "/data": "/#systems",
  "/tools": "/#systems",
  "/content": "/#campaign",
  "/research": "/#index",
  "/experience": "/#index",
  "/education": "/#index",
  "/about": "/#notes",
  "/contact": "/#contact",
};

const nextConfig = {
  async redirects() {
    return Object.entries(moved).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
