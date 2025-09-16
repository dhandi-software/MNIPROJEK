import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { InputOTP } from "~/components/ui/input-otp";
import type { VerifyOtpProps } from ".";
import { ButtonAction } from "~/components/ui/button-action";
import { useNavigate } from "react-router";

export default function VerifyOtpFormDesktop({ onBack }: VerifyOtpProps) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/onboarding");
        }, 1000);
    };

    return (
        <>
            <div>
                <Button
                    variant={"link"}
                    className="!p-0 !text-foreground"
                    size={"sm"}
                    onClick={() => {
                        onBack();
                    }}
                >
                    <ArrowLeft /> Back
                </Button>
            </div>
            <h1 className="text-heading-h3 text-foreground mt-sm">
                Verify your email address
            </h1>
            <p className="mb-lg text-paragraph text-muted-foreground mt-sm">
                We just send 6-digit verification code to your email{" "}
                <span className="text-label-lg text-foreground">
                    gregjuliaan@mail.com.
                </span>{" "}
                Enter the code within 5 minutes.
            </p>
            <InputOTP containerClassName="h-4xl" className="!h-4xl w-full" />

            <ButtonAction
                className="mt-lg"
                size={"lg"}
                loading={loading}
                onClick={handleSubmit}
            >
                Continue
            </ButtonAction>
            <div className="text-paragraph-sm text-muted-foreground mt-sm py-[0.625rem] px-2">
                Can’t find the email? Try check spam folder or{" "}
                <span className="underline text-link cursor-pointer">
                    Resend new code
                </span>
            </div>
        </>
    );
}
