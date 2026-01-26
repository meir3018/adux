const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    "",
    "/inspections-services",
    "/monitoring",
    "/projects",
    "/careers",
    "/blog",
    "/about",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
