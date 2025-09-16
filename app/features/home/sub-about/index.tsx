import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { SubAboutDesktop } from "~/features/home/sub-about/SubAboutDesktop";
import SubAboutMobile from "~/features/home/sub-about/SubAboutMobile";

export default function SubHeader() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <SubAboutMobile /> : <SubAboutDesktop />;
}
