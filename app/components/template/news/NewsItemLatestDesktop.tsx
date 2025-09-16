import { Link } from "react-router";
import { cn } from "~/lib/utils";
import type { NewsItemLatestDesktopProps } from ".";

export default function NewsItemLatestDesktop({
    news,
    variant = "side",
    className,
}: NewsItemLatestDesktopProps) {
    if (variant === "highlight") {
        return (
            <Link
                to={`/news/${news.id}`}
                className={cn(
                    "relative rounded-md overflow-hidden group",
                    className,
                )}
            >
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-[40rem] h-[24.75rem] object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-xl">
                    <p className="text-paragraph-sm text-white pb-sm">
                        {news.date}
                    </p>
                    <h2 className="text-subheading-h3 text-white pb-lg">
                        {news.title}
                    </h2>
                    <p className="text-paragraph text-white line-clamp-2">
                        {news.description}
                    </p>
                </div>
            </Link>
        );
    }

    return (
        <Link
            to={`/news/${news.id}`}
            className={cn(
                "w-[19.75rem] h-full overflow-hidden group",
                className,
            )}
        >
            <img
                src={news.image}
                alt={news.title}
                className="h-[16.1875rem] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
            />
            <div className="flex flex-col gap-sm pt-xl">
                <p className="text-paragraph-sm text-muted-foreground">
                    {news.date}
                </p>
                <h3 className="text-subheading-h5 text-foreground line-clamp-3">
                    {news.title}
                </h3>
            </div>
        </Link>
    );
}
