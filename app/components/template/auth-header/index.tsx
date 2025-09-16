import AuthHeaderMobile from "~/components/template/auth-header/AuthHeaderMobile";
import AuthHeaderDesktop from "~/components/template/auth-header/AuthHeaderDesktop";

export default function AuthHeader({ isMobile }: { isMobile?: boolean }) {
    return isMobile ? <AuthHeaderMobile /> : <AuthHeaderDesktop />;
}