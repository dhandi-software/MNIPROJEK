import LoginMobile from "~/features/auth/login/pages/LoginMobile";
import LoginDesktop from "~/features/auth/login/pages/LoginDesktop";
import { useLogin } from "~/features/auth/login/pages/useLogin";
export default function LoginPage() {
    const { isMobile } = useLogin();
    return isMobile ? <LoginMobile /> : <LoginDesktop />;
}
