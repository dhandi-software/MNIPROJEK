import { ChooseTicketItemDesktop } from "~/components/template/choose-ticket";
export function CheckoutOrderDetailSectionDesktop() {
    return (
        <section className="flex flex-col">
            <h1 className="text-heading-h4">Order detail</h1>
            <div className="flex flex-col gap-y-md mt-md">
                <ChooseTicketItemDesktop
                    tier="Gold"
                    price="IDR 4.000.000"
                    canDelete={true}
                    size="lg"
                />
                <ChooseTicketItemDesktop
                    tier="Silver"
                    price="IDR 1.000.000"
                    canDelete={true}
                    size="lg"
                />
            </div>
        </section>
    );
}
