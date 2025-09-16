import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
import { BenefitItemDesktop } from "~/components/template/benefit";
export function CardPriceTierDesktop({
    title,
    tier,
    price,
    isTopPicks = false,
}: {
    title: string;
    tier: "Gold" | "Silver" | "Bronze";
    price: string;
    isTopPicks?: boolean;
}) {
    return (
        <div className="relative flex flex-col p-lg rounded-md shadow-md border border-subtle gap-y-sm">
            <img
                className="absolute top-0 right-0"
                src="/images/bg_card_price_tier.svg"
                alt="bg_card_price_tier"
                loading="lazy"
            />
            {isTopPicks && (
                <img
                    className="absolute top-[7.9px] right-0"
                    src="/images/badge_top_picks.svg"
                    alt="badge_top_picks"
                    loading="lazy"
                />
            )}
            <h1 className={"text-label-lg text-foreground"}>{tier} Tier</h1>
            <div className="grid grid-cols-2">
                <BenefitItemDesktop text="Multi access to all speakers" />
                <BenefitItemDesktop text="+5 more benefits" />
                <BenefitItemDesktop text="Gala night dinner" />
            </div>
            <hr />
            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col">
                    <span className="text-foreground font-geist-mono text-label-lg !font-semibold">
                        {price}
                    </span>
                    <span className="text-desc-sm text-muted-foreground">
                        Prices above does not include VAT
                    </span>
                </div>
                <div className="flex flex-row gap-x-sm text-label text-foreground items-center justify-center h-fit cursor-pointer hover:underline">
                    See details
                    <ChevronRight size={16} />
                </div>
            </div>
        </div>
    );
}
