import {
    type RouteConfig,
    index,
    route,
    prefix,
    layout,
} from "@react-router/dev/routes";

export default [route("/", "routes/landing/home.tsx")] satisfies RouteConfig;
