import OnboardingInformation from "~/components/template/onboarding-form";

type Props = {
    onBack: () => void;
};

export function InformationSection({ onBack }: Props) {
    return <OnboardingInformation onBack={onBack} />;
}
