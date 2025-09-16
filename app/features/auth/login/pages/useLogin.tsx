import { useState } from "react";
import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import { type AuthFormProps } from "~/components/template/auth-form";
import { type VerifyOtpProps } from "~/components/template/verify-otp-form";
export enum LoginStep {
    AUTH_STEP,
    VERIFY_STEP,
}
export interface LoginPageProps extends AuthFormProps, VerifyOtpProps {
    step: LoginStep;
}

export function useLogin() {
    const [step, setStep] = useState(LoginStep.AUTH_STEP);
    const { isMobile } = useOutletContext<ContextType>();

    function onBack() {
        if (step == LoginStep.VERIFY_STEP) {
            setStep(LoginStep.AUTH_STEP);
        }
    }
    function onLoginSuccess() {
        setStep(LoginStep.VERIFY_STEP);
    }

    return {
        step,
        onBack,
        onLoginSuccess,
        isMobile,
        setStep,
    };
}
