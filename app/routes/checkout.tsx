import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { CheckoutMobile, CheckoutDesktop } from "~/features/checkout/pages";
export default function Checkout() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <CheckoutMobile /> : <CheckoutDesktop />;
}
