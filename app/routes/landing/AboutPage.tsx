import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { AboutDesktop, AboutMobile } from "~/features/home/AboutPage";
export default function EventDetail() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <AboutMobile /> : <AboutDesktop />;
}
