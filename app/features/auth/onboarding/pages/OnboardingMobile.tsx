import { ChooseRoleSectionMobile } from "~/features/auth/onboarding/sections/ChooseRoleSectionMobile";
import { InformationSection } from "~/features/auth/onboarding/sections/InformationSection";
import type { OnboardingOption } from "~/features/auth/onboarding/pages";
import { useOnboarding } from "~/features/auth/onboarding/pages/useOnboarding";

export default function OnboardingMobile({
    data,
}: {
    data: OnboardingOption[];
}) {
    const { step, selected, setSelected, goNext, goBack } = useOnboarding(data);

    if (step === "information") {
        return <InformationSection onBack={goBack} />;
    }

    return (
        <div className="">
            <div className="flex flex-col h-full">
                <ChooseRoleSectionMobile
                    data={data}
                    selected={selected}
                    setSelected={setSelected}
                    onNext={goNext}
                />
            </div>
        </div>
    );
}
