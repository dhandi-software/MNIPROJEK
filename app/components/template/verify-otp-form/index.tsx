import { useOutletContext } from "react-router"
import type { ContextType } from "~/root"
import VerifyOtpFormMobile from "~/components/template/verify-otp-form/VerifyOtpFormMobile"
import VerifyOtpFormDesktop from "~/components/template/verify-otp-form/VerifyOtpFormDesktop"

export interface VerifyOtpProps {
    onBack: () => void
}

export default function VerifyOtpForm({ onBack }: VerifyOtpProps) {
    const { isMobile } = useOutletContext<ContextType>()
    return (
        isMobile ? <VerifyOtpFormMobile onBack={onBack}/> : <VerifyOtpFormDesktop onBack={onBack} />
    )
}