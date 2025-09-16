import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import LatestNewsMobile from "~/features/news/components/latest-news/LatestNewsMobile";
import LatestNewsDesktop from "~/features/news/components/latest-news/LatestNewsDesktop";
import type { NewsItem } from "~/components/template/news";

const newsData: NewsItem[] = [
    {
        id: 1,
        date: "20 August 2025",
        title: "MDP has achieved a significant milestone by advancing to a new stage beyond the Global Network.",
        description:
            "MDP has hit a huge milestone, entering a new chapter that goes beyond the Global Network. This is a key moment in our journey, highlighting our dedication to innovation and excellence. As we broaden our horizons, we want you to check out the exciting opportunities coming up, like new collaborations and game-changing initiatives that will reshape our influence in the industry.",
        image: "/images/latest-news-1.jpg",
    },
    {
        id: 2,
        date: "17 July 2025",
        title: "MDP has reached a remarkable achievement by transitioning to a new phase that elevates our event platform beyond the Global Network.",
        description: "",
        image: "/images/latest-news-2.jpg",
    },
    {
        id: 3,
        date: "17 June 2025",
        title: "MDP has reached a groundbreaking achievement by transitioning to a new phase that surpasses the Global Network.",
        description: "",
        image: "/images/latest-news-3.jpg",
    },
];

export default function LatestNews() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? (
        <LatestNewsMobile />
    ) : (
        <LatestNewsDesktop newsData={newsData} />
    );
}
