import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import NewsByTopicsDesktop from "~/features/news/components/news-by-topics/NewsByTopicsDesktop";
import NewsByTopicsMobile from "~/features/news/components/news-by-topics/NewsByTopicsMobile";
import type { NewsItem } from "~/components/template/news";

const newsData: NewsItem[] = [
    {
        id: 1,
        image: "/images/latest-news-3.jpg",
        date: "20 August 2025",
        title: "MDP has reached a remarkable achievement by transitioning to a new phase that elevates our event platform beyond the Global Network.",
        description:
            "MDP has hit a huge milestone, entering a new chapter that goes beyond the Global Network. This is a key moment in our journey, highlighting our dedication to innovation and excellence. As we broaden our horizons, we want you to check out the exciting opportunities coming up, like new collaborations and game-changing initiatives that will reshape our influence in the industry.",
    },
    {
        id: 2,
        image: "/images/latest-news-3.jpg",
        date: "17 July 2025",
        title: "MDP has reached a remarkable achievement by transitioning to a new phase that elevates our event platform beyond the Global Network.",
        description:
            "MDP has hit a huge milestone, entering a new chapter that goes beyond the Global Network. This is a key moment in our journey, highlighting our dedication to innovation and excellence. As we broaden our horizons, we want you to check out the exciting opportunities coming up, like new collaborations and game-changing initiatives that will reshape our influence in the industry.",
    },
    {
        id: 3,
        image: "/images/latest-news-3.jpg",
        date: "10 July 2025",
        title: "MDP has reached a remarkable achievement by transitioning to a new phase that elevates our event platform beyond the Global Network.",
        description:
            "MDP has hit a huge milestone, entering a new chapter that goes beyond the Global Network. This is a key moment in our journey, highlighting our dedication to innovation and excellence. As we broaden our horizons, we want you to check out the exciting opportunities coming up, like new collaborations and game-changing initiatives that will reshape our influence in the industry.",
    },
    {
        id: 4,
        image: "/images/latest-news-3.jpg",
        date: "1 June 2025",
        title: "MDP has reached a remarkable achievement by transitioning to a new phase that elevates our event platform beyond the Global Network.",
        description:
            "MDP has hit a huge milestone, entering a new chapter that goes beyond the Global Network. This is a key moment in our journey, highlighting our dedication to innovation and excellence. As we broaden our horizons, we want you to check out the exciting opportunities coming up, like new collaborations and game-changing initiatives that will reshape our influence in the industry.",
    },
];

export default function NewsByTopics() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? (
        <NewsByTopicsMobile />
    ) : (
        <NewsByTopicsDesktop newsData={newsData} />
    );
}
