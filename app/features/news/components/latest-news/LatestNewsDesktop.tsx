import type { NewsItem } from "~/components/template/news";
import NewsItemLatestDesktop from "~/components/template/news/NewsItemLatestDesktop";

export default function LatestNewsDesktop({
    newsData,
}: {
    newsData: NewsItem[];
}) {
    return (
        <section className="flex flex-col p-[3.75rem] border-b border-border-subtle">
            {/* Header */}
            <div className="flex flex-col gap-lg pb-xl">
                <h1 className="text-heading-h1">Latest news on MDP</h1>
                <p className="text-paragraph text-muted-foreground">
                    Find anything you want to know about us. Our latest stories,
                    article, case studies, and events.
                </p>
            </div>

            {/* News Grid */}
            <div className="flex gap-xl">
                {/* Highlight News */}
                <NewsItemLatestDesktop news={newsData[0]} variant="highlight" />

                {/* Side News */}
                <div className="flex gap-xl">
                    {newsData.slice(1).map((item) => (
                        <NewsItemLatestDesktop
                            key={item.id}
                            news={item}
                            variant="side"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
