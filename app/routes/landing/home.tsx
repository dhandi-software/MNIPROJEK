import type { Route } from "../+types/landing/home";
import { getInstance } from "~/middleware/i18next";
import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { HomeDesktop, HomeMobile } from "~/features/home/pages";
export async function loader({ context }: Route.LoaderArgs) {
    let i18next = getInstance(context);
    return {
        title: i18next.t("title"),
        description: i18next.t("description"),
    };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mining Digital Platform" },
        { name: "description", content: "Welcome to MDP!" },
    ];
}
