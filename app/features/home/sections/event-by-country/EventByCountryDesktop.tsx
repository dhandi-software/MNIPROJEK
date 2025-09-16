import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

function CountryItem({ country, icon }: { country: string; icon: string }) {
    return (
        <Link
            to={"/discover-events"}
            className="flex flex-col gap-y-sm items-center cursor-pointer hover:scale-105 transition-transform duration-300"
        >
            <div className="size-[6.25rem] bg-neutral-100 rounded-full py-[1.875rem] px-[1.438rem]">
                <img src={icon} loading="lazy" alt={country} />
            </div>
            <span className="text-paragraph text-foreground">{country}</span>
        </Link>
    );
}
export function EventByCountryDesktop() {
    return (
        <section className="flex flex-col p-4xl">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-heading-h1 text-foreground">
                    Discover event by country or region
                </h1>
                <Button variant="ghost">
                    View more
                    <ChevronRight />
                </Button>
            </div>
            <div className="grid grid-cols-7 mt-2xl">
                <CountryItem
                    country="Indonesia"
                    icon="/icons/ic_indonesia.svg"
                />
                <CountryItem country="Malaysia" icon="/icons/ic_malaysia.svg" />
                <CountryItem
                    country="Singapore"
                    icon="/icons/ic_singapore.svg"
                />
                <CountryItem country="United States" icon="/icons/ic_us.svg" />
                <CountryItem country="China" icon="/icons/ic_china.svg" />
                <CountryItem
                    country="Europe (EU)"
                    icon="/icons/ic_europe.svg"
                />
                <CountryItem
                    country="Uni Arab Emirates"
                    icon="/icons/ic_uae.svg"
                />
            </div>
        </section>
    );
}
