import { useLogin, LoginStep } from "~/features/auth/login/pages/useLogin";
import AuthForm from "~/components/template/auth-form";
import VerifyOtpForm from "~/components/template/verify-otp-form";

export default function LoginDesktop() {
    const { step, onBack, onLoginSuccess } = useLogin();

    return (
        <>
            {step === LoginStep.AUTH_STEP && (
                <AuthForm onLoginSuccess={onLoginSuccess} />
            )}
            {step === LoginStep.VERIFY_STEP && (
                <VerifyOtpForm onBack={onBack} />
            )}
        </>
    );
}
