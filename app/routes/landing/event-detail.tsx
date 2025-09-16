import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import {
    EventDetailMobile,
    EventDetailDesktop,
} from "~/features/event-detail/pages";
export default function EventDetail() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <EventDetailMobile /> : <EventDetailDesktop />;
}
