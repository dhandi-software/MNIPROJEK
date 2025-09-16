import AlertBanner from "~/components/ui/alert-banner";
import { Info } from "lucide-react";

export function CheckoutAccountInfoSectionDesktop() {
    return (
        <div className="flex flex-col gap-y-lg">
            <h1 className="text-heading-h4 text-foreground">
                Account Information
            </h1>
            <div className="flex flex-col gap-y-0.5">
                <span className="text-label text-foreground">Full name</span>
                <span className="text-table-content text-muted-foreground">
                    Greg Julian
                </span>
            </div>
            <div className="flex flex-col gap-y-0.5">
                <span className="text-label text-foreground">Email</span>
                <span className="text-table-content text-muted-foreground">
                    gregjuliaan@mail.com
                </span>
            </div>
            <AlertBanner
                icon={<Info size={16} />}
                description="Digital ticket & invoice will be send to this email"
            />
        </div>
    );
}
