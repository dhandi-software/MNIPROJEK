import FooterDesktop from "~/components/template/footer/FooterDesktop";
import FooterMobile from "~/components/template/footer/FooterMobile";
export default function Footer({ isMobile = false }: { isMobile?: boolean }) {
    return isMobile ? <FooterMobile /> : <FooterDesktop />
}