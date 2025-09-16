import { useState } from "react";
import type { OnboardingOption } from "~/features/auth/onboarding/pages";

export function useOnboarding(data: OnboardingOption[]) {
    const [selected, setSelected] = useState(data[0].value);
    const [step, setStep] = useState<"choose-role" | "information">(
        "choose-role",
    );

    const goNext = () => setStep("information");
    const goBack = () => setStep("choose-role");

    return {
        step,
        selected,
        setSelected,
        goNext,
        goBack,
        data,
    };
}
