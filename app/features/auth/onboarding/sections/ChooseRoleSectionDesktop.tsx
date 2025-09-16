import { Button } from "~/components/ui/button";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import type { OnboardingOption } from "~/features/auth/onboarding/pages";

type Props = {
    data: OnboardingOption[];
    selected: string;
    setSelected: (val: string) => void;
    onNext: () => void;
};

export function ChooseRoleSectionDesktop({
    data,
    selected,
    setSelected,
    onNext,
}: Props) {
    return (
        <div className="flex flex-col">
            <div className="pb-lg text-heading-h3">
                <h1>Welcome to MDP</h1>
                <p>We can help you to setup your account.</p>
            </div>

            <RadioGroup value={selected} onValueChange={setSelected}>
                {data.map((opt) => (
                    <Label
                        key={opt.value}
                        className={cn(
                            "flex cursor-pointer items-center gap-lg rounded-md px-lg py-md text-subheading-h4 mb-lg border transition",
                            selected === opt.value
                                ? "border-2 border-brand-primary shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]"
                                : "border-border-subtle",
                        )}
                    >
                        <img
                            src="/icons/ic_logo.svg"
                            alt={opt.label}
                            width={60}
                            height={60}
                        />
                        <span className="flex-1">{opt.label}</span>
                        <RadioGroupItem value={opt.value} />
                    </Label>
                ))}
            </RadioGroup>

            <Button
                className="text-label"
                variant="default"
                size="lg"
                onClick={onNext}
            >
                Next
            </Button>
        </div>
    );
}
