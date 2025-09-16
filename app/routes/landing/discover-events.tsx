import ExploreEvent from "~/components/template/explore-event";
import EventTopics from "~/features/discover-events/components/event-topics";
import Hero from "~/features/discover-events/components/hero";
import NewMemberPromo from "~/features/discover-events/components/new-member-promo";

export default function DiscoverEvents() {
    return (
        <main className="flex flex-col">
            <Hero />
            <EventTopics />
            <ExploreEvent title={"Stay ahead with the latest trends"} />
            <NewMemberPromo />
            <ExploreEvent title={"Events based on category"} />
        </main>
    );
}
