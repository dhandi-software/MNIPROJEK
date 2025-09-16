import AsideDesktop from "~/components/template/aside/AsideDesktop";
import AsideMobile from "~/components/template/aside/AsideMobile";

export default function Aside({ isMobile = false }: { isMobile?: boolean }) {
    return isMobile ? <AsideMobile /> : <AsideDesktop />;
}
