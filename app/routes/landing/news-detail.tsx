import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import {
    NewsDetailMobile,
    NewsDetailDesktop,
} from "~/features/news-detail/pages";
export default function NewsDetail() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <NewsDetailMobile /> : <NewsDetailDesktop />;
}
