import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import {
    HelpCenterDesktop,
    HelpCenterMobile,
} from "~/features/home/HelpCenterPage";
export default function EventDetail() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <HelpCenterMobile /> : <HelpCenterDesktop />;
}
