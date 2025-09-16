import { Button } from "~/components/ui/button";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { cn } from "~/lib/utils";
import type { OnboardingOption } from "~/features/auth/onboarding/pages";

type Props = {
    data: OnboardingOption[];
    selected: string;
    setSelected: (val: string) => void;
    onNext: () => void;
};

export function ChooseRoleSectionMobile({
    data,
    selected,
    setSelected,
    onNext,
}: Props) {
    return (
        <div className={cn("flex flex-col", "rounded-md")}>
            <div className="pb-lg text-heading-h4">
                <h1>Welcome to MDP</h1>
                <p>We can help you to setup your account.</p>
            </div>

            <RadioGroup value={selected} onValueChange={setSelected}>
                {data.map((opt) => (
                    <label
                        key={opt.value}
                        className={cn(
                            "flex cursor-pointer items-center gap-md rounded-md p-md mb-lg border transition text-foreground text-label-lg",
                            selected === opt.value
                                ? "border-2 border-brand-primary shadow-[0px_2px_4px_-1px_#0000000F,0px_4px_6px_-1px_#0000001A]"
                                : "border-border-subtle",
                        )}
                    >
                        <img
                            src="/icons/ic_logo.svg"
                            alt={opt.label}
                            width={36}
                            height={36}
                        />
                        <span className="flex-1">{opt.label}</span>
                        <RadioGroupItem value={opt.value} />
                    </label>
                ))}
            </RadioGroup>

            <Button
                className="text-label mt-md"
                variant="default"
                size="lg"
                onClick={onNext}
            >
                Next
            </Button>
        </div>
    );
}
