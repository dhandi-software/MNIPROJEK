import NewsByTopics from "~/features/news/components/news-by-topics";
import LatestNews from "~/features/news/components/latest-news";
import SubHeader from "~/features/search/components/sub-header";

export default function Newsroom() {
    return (
        <main className="flex flex-col">
            <SubHeader
                type="simple"
                url={[{ label: "Home", href: "/" }, { label: "Newsroom" }]}
            />
            <LatestNews />
            <NewsByTopics />
        </main>
    );
}
