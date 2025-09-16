import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { NewsItemDesktopProps } from ".";

export default function NewsItemDesktop({
    news,
    className,
}: NewsItemDesktopProps) {
    return (
        <Link
            to={`/news/${news.id}`}
            className={cn(
                "flex gap-xl group cursor-pointer items-stretch h-full",
                className,
            )}
        >
            <img
                src={news.image}
                alt={news.title}
                className="w-[17.5rem] h-[12.5rem] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
            />

            <div className="flex flex-col gap-xl">
                <div className="flex flex-col gap-sm">
                    <p className="text-paragraph-sm text-muted-foreground">
                        {news.date}
                    </p>
                    <h1 className="text-subheading-h5 text-foreground">
                        {news.title}
                    </h1>
                    <p className="text-paragraph text-muted-foreground line-clamp-2">
                        {news.description}
                    </p>
                </div>
                <Button
                    variant="outline"
                    size="md"
                    className="rounded-md shadow-xs border-border-subtle w-[6.5rem]"
                >
                    <span className="text-label text-secondary-foreground">
                        Read news
                    </span>
                </Button>
            </div>
        </Link>
    );
}
