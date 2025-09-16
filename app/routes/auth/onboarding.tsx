import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import OnboardingMobile from "~/features/auth/onboarding/pages/OnboardingMobile";
import OnboardingDesktop from "~/features/auth/onboarding/pages/OnboardingDesktop";

export default function OnboardingnPage() {
    const { isMobile } = useOutletContext<ContextType>();

    const OPTIONS = [
        { label: "I want to discover event", value: "discover-event" },
        { label: "I want to be event organizer", value: "organizer-event" },
        { label: "I want to be speaker/host", value: "host-event" },
    ];

    return isMobile ? (
        <OnboardingMobile data={OPTIONS} />
    ) : (
        <OnboardingDesktop data={OPTIONS} />
    );
}
