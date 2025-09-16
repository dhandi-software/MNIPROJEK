import { TicketPercent } from "lucide-react";
export function CheckoutOrderSummarySectionDesktop() {
    return (
        <section className="flex flex-col">
            <h1 className="text-heading-h4 text-foreground mb-md">
                Order summary
            </h1>
            <div className="flex flex-row justify-between mb-md">
                <span className="text-foreground text-paragraph">
                    1x ticket Membership tier
                </span>
                <span className="text-foreground text-number font-medium font-geist-mono">
                    IDR 1.500.000
                </span>
            </div>
            <div className="flex flex-row justify-between mb-md">
                <span className="text-foreground text-paragraph">
                    1x ticket Membership tier
                </span>
                <span className="text-foreground text-number font-medium font-geist-mono">
                    IDR 1.500.000
                </span>
            </div>
            <div className="flex flex-row justify-between mb-md">
                <span className="text-foreground text-paragraph">
                    1x ticket Membership tier
                </span>
                <span className="text-foreground text-number font-medium font-geist-mono">
                    IDR 1.500.000
                </span>
            </div>
            <div className="flex flex-row justify-between mb-md">
                <span className="text-foreground text-paragraph">
                    Taxes and VAT
                </span>
                <span className="text-foreground text-number font-medium font-geist-mono">
                    IDR 20.000
                </span>
            </div>
            <div className="flex flex-row justify-between mt-[2.25rem] mb-md">
                <div className="text-brand-destructive text-paragraph gap-x-sm flex flex-row items-center">
                    <TicketPercent size={20} />
                    Promo code discount
                </div>
                <span className="text-brand-destructive text-number font-medium font-geist-mono">
                    IDR 20.000
                </span>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-center my-md">
                <span className="text-subheading-h5 text-foreground">
                    Total Order
                </span>
                <span className="text-xl font-semibold font-geist-mono text-foreground">
                    IDR 1.500.000
                </span>
            </div>
            <hr />
        </section>
    );
}
