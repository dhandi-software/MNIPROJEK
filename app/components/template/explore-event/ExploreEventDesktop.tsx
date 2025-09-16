import { OutlineCategoryChip } from "~/components/ui/category-chip";
import EventItemDesktop from "~/components/template/event/EventItemDesktop";
import { Button } from "~/components/ui/button";
import type { ExploreEventProps } from ".";
export function ExploreEventDesktop({ title }: ExploreEventProps) {
    return (
        <section className="flex flex-col px-4xl pt-4xl pb-3xl gap-y-2xl">
            <h1 className="text-heading-h1 text-foreground">{title}</h1>
            <div className="flex flex-row gap-x-lg">
                <OutlineCategoryChip isActive={true} text="Most Popular" />
                <OutlineCategoryChip text="Recently Added" />
            </div>
            <div className="grid grid-cols-4 gap-x-xl">
                <EventItemDesktop
                    date="19 - 20 Oct 2025"
                    price="IDR 5.000.000"
                    discountedPrice="IDR 45.000.000"
                    title="Li-ION BATTERY China"
                    ticketSold="Over 200+ ticket sold"
                    status="popular now"
                    location="Xiamen, China"
                />
                <EventItemDesktop
                    date="19 - 20 Oct 2025"
                    price="IDR 5.000.000"
                    title="Li-ION BATTERY China"
                    status="popular now"
                    location="Xiamen, China"
                />
                <EventItemDesktop
                    date="19 - 20 Oct 2025"
                    price="IDR 5.000.000"
                    title="Li-ION BATTERY China"
                    ticketSold="Over 200+ ticket sold"
                    location="Xiamen, China"
                />
                <EventItemDesktop
                    date="19 - 20 Oct 2025"
                    price="IDR 5.000.000"
                    discountedPrice="IDR 45.000.000"
                    title="Li-ION BATTERY China"
                    ticketSold="Over 200+ ticket sold"
                    status="almost full"
                    location="Xiamen, China"
                />
            </div>
            <div className="flex justify-center">
                <Button variant="secondary" size={"lg"} className="!font-semibold">View more events</Button>
            </div>
        </section>
    )
}