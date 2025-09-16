import {
    type RouteConfig,
    index,
    route,
    prefix,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("routes/landing/landing-layout.tsx", [
        route("/", "routes/landing/home.tsx"),
        route("search", "routes/landing/search.tsx"),
        route("about", "routes/landing/AboutPage.tsx"),
        route("help-center", "routes/landing/HelpCenterPage.tsx"),

        ...prefix("news", [
            index("routes/landing/news.tsx"),
            route(":id", "routes/landing/news-detail.tsx"),
        ]),
    ]),

    layout("routes/auth/login-layout.tsx", [
        route("login", "routes/auth/login.tsx"),
        route("onboarding", "routes/auth/onboarding.tsx"),
    ]),

    route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
