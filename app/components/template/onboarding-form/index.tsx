import { useOutletContext } from "react-router"
import type { ContextType } from "~/root"
import OnBoardingInformationMobile from "~/components/template/onboarding-form/OnBoardingInformationMobile"
import OnBoardingInformationDesktop from "~/components/template/onboarding-form/OnBoardingInformationDesktop"

export interface OnboardingInformationProps {
    onBack: () => void
}

export default function OnboardingInformation({ onBack }: OnboardingInformationProps) {
    const { isMobile } = useOutletContext<ContextType>()
    const FIELDS = [
        "Automotion and Robotics",
        "Environmental Engineering",
        "Project Management",
        "Resource Management",
        "Researcher",
    ]

        const LOCATIONS = [
        "Jakarta, Indonesia",
        "Bali, Indonesia",
        "Bandung, Indonesia",
        "Kuala Lumpur, Malaysia",
    ]

    return (
        isMobile ? 
            <OnBoardingInformationMobile 
                onBack={onBack}
                expertises={FIELDS}
                locations={LOCATIONS}
            /> : 
            <OnBoardingInformationDesktop 
                onBack={onBack}
                expertises={FIELDS}
                locations={LOCATIONS}
            />
    )
}