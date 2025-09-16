export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

export interface NewsItemDesktopProps {
    news: NewsItem;
    className?: string;
}

export interface NewsItemLatestDesktopProps {
    news: NewsItem;
    variant?: "highlight" | "side";
    className?: string;
}
