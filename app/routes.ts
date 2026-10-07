import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route(
    "nasional/20261006181606-20-1412369/rocky-gerung-saya-di-kalangan-istana-sekarang-akan-jadi-sasaran",
    "routes/article.tsx",
  ),
] satisfies RouteConfig;
