import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { InputOTP } from "~/components/ui/input-otp";
import type { VerifyOtpProps } from "~/components/template/verify-otp-form";
import { ButtonAction } from "~/components/ui/button-action";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function VerifyOtpFormMobile({ onBack }: VerifyOtpProps) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/onboarding");
        }, 1000);
    };

    return (
        <div>
            <Button
                className="!text-foreground !p-0 !pb-lg justify-start"
                variant="link"
                size="sm"
                onClick={onBack}
            >
                <ArrowLeft className="size-3.5" />
                <span className="text-label-sm ">Back</span>
            </Button>

            <section className="px-lg">
                <div className="flex flex-col gap-1">
                    <h1 className=" text-heading-h4 font-bold text-foreground">
                        Verify your email address
                    </h1>
                    <p className=" text-paragraph text-muted-foreground ">
                        We just send 6-digit verification code to your email{" "}
                        <span className=" text-label-lg  text-foreground">
                            gregjuliaan@mail.com.
                        </span>{" "}
                        Enter the code within 5 minutes.
                    </p>
                </div>
            </section>

            <section className="px-lg my-lg">
                <InputOTP className="w-full h-[3rem]" />
            </section>

            <section className="px-lg  text-center">
                <ButtonAction
                    loading={loading}
                    onClick={handleSubmit}
                    className="w-full font-medium text-sm leading-4 mb-md"
                >
                    Continue
                </ButtonAction>
                <p className=" py-sm px-md w-full h-2xl text-center text-[0.875rem] leading-[1.25rem] font-label text-secondary-foreground">
                    Can't find the email? Try check spam folder or{" "}
                    <a className="text-center underline decoration-solid text-link cursor-pointer text-[0.875rem] leading-[1.25rem] font-label">
                        Resend new code
                    </a>
                </p>
            </section>
        </div>
    );
}
