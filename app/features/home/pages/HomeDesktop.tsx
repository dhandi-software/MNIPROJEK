import { HeroDesktop } from "~/features/home/sections/hero";
import { ProductInsightDesktop } from "~/features/home/sections/product-insight";
import { ExclusiveForYouDesktop } from "~/features/home/sections/for-you";
import { EventByCountryDesktop } from "~/features/home/sections/event-by-country";
import { ExploreEventDesktop } from "~/components/template/explore-event";
import { CountdownEventDesktop } from "~/features/home/sections/countdown-event";

import { InfoSignUpDesktop } from "~/features/home/sections/info-signup";
export function HomeDesktop() {
    return (
        <div className="flex flex-col">
            <HeroDesktop />
            <ProductInsightDesktop />
            <ExclusiveForYouDesktop />
            <EventByCountryDesktop />
            <ExploreEventDesktop title="World class topics, more to explore" />
            <CountdownEventDesktop />
            <InfoSignUpDesktop />
        </div>
    );
}
