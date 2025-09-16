import { ChooseRoleSectionDesktop } from "~/features/auth/onboarding/sections/ChooseRoleSectionDesktop";
import { InformationSection } from "~/features/auth/onboarding/sections/InformationSection";
import type { OnboardingOption } from "~/features/auth/onboarding/pages";
import { useOnboarding } from "~/features/auth/onboarding/pages/useOnboarding";

export default function OnboardingDesktop({
    data,
}: {
    data: OnboardingOption[];
}) {
    const { step, selected, setSelected, goNext, goBack } = useOnboarding(data);

    if (step === "information") {
        return <InformationSection onBack={goBack} />;
    }

    return (
        <ChooseRoleSectionDesktop
            data={data}
            selected={selected}
            setSelected={setSelected}
            onNext={goNext}
        />
    );
}
