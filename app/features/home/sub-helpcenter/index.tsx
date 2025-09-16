import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { SubHelpDesktop } from "~/features/home/sub-helpcenter/SubHelpDesktop";
import SubHelpMobile from "~/features/home/sub-helpcenter/SubHelpMobile";

export default function SubHelp() {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? <SubHelpMobile /> : <SubHelpDesktop />;
}
