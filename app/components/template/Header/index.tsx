import HeaderMobile from "~/components/template/header/HeaderMobile";
import HeaderDesktop from "~/components/template/header/HeaderDesktop";

export default function Header({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
