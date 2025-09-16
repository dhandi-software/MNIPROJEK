import { Card } from "~/components/ui/card"
import { Flame } from "lucide-react"
import { Tag } from "~/components/ui/tag"
import { cn } from "~/lib/utils"
import { Link } from "react-router"
const STATUS_POPULAR = "popular now"
const STATUS_ALMOST_FULL = "almost full"
function BadgeStatus({ className, label }: { className?: string, label: typeof STATUS_POPULAR | typeof STATUS_ALMOST_FULL }) {
    return (
        <div className={cn(
            "text-white p-[0.63rem] rounded-tl-lg rounded-br-lg uppercase",
            label === STATUS_POPULAR ? "bg-[#155DFC]" : "bg-[#FE9A00]",
            className
        )}>
            {label}
        </div>
    )
}

interface EventItemDesktopProps {
    status?: typeof STATUS_POPULAR | typeof STATUS_ALMOST_FULL
    className?: string,
    ticketSold?: string,
    title: string,
    date: string,
    location: string,
    discountedPrice?: string,
    price: string
}

export default function EventItemDesktop({
    status,
    ticketSold,
    title,
    date,
    location,
    discountedPrice,
    price
}: EventItemDesktopProps) {
    return (
        <Link to="/discover-events/1" className="rounded-lg border border-b-subtle shadow-sm relative cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col p-0 pb-lg bg-white gap-0">
            {(status === STATUS_POPULAR || status === STATUS_ALMOST_FULL) && <BadgeStatus label={status} className="absolute top-0 left-0" />}
            <img src="/images/event.svg" loading="lazy" className="rounded-t-lg" />
            <div className="flex flex-col px-lg mt-md h-full">
                {ticketSold &&
                    <div className="flex flex-row items-center text-orange-500 text-caption-sm gap-x-xs">
                        <Flame size={16} />
                        {ticketSold}
                    </div>}
                <div className="flex flex-row gap-x-sm mb-sm mt-sm">
                    <Tag label="New Energy" size={"s"} />
                    <Tag label="Nickel" size={"s"} />
                    <Tag label="Stainless Steel" size={"s"} />
                </div>
                <span className="text-foreground text-label-lg mb-xs">{title}</span>
                <span className="text-muted-foreground text-desc !leading-sm">{date}</span>
                <span className="text-muted-foreground text-desc mb-[2.25rem] !leading-sm">{location}</span>
                <div className="flex flex-col justify-end h-full">
                    <hr className="w-full mb-sm" />

                    <div
                        className={cn(
                            "flex flex-col h-[3.5rem]",
                            discountedPrice ? "justify-end" : "justify-center"
                        )}
                    >
                        {discountedPrice && (
                            <span className="line-through font-geist-mono text-muted-foreground text-number">
                                {discountedPrice}
                            </span>
                        )}
                        <span
                            className={cn(
                                "font-geist-mono text-label-lg !font-semibold",
                                discountedPrice ? "text-brand-destructive" : "text-foreground"
                            )}
                        >
                            {price}
                        </span>
                    </div>
                </div>

            </div>
        </Link>
    )
}