import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/TextField";
import type { AuthFormProps } from ".";

export default function AuthFormMobile({
    onLoginSuccess,
    isDialog = true,
}: AuthFormProps) {
    return (
        <div className="flex flex-col gap-lg">
            <Button
                type="button"
                aria-label="Back"
                variant="link"
                size="sm"
                className="!p-0 !h-auto gap-sm w-fit !px-0 !text-neutral-950"
            >
                <ArrowLeft className=" *:" />
                <span className="font-medium text-xs">Back</span>
            </Button>

            <div className="w-[20.5rem] pb-[0.75rem] flex flex-col gap-xs">
                <h1 className="font-bold text-[1.25rem] leading-[1.75rem]  text-neutral-950">
                    Sign in or Create an account
                </h1>
                <p className="text-muted-foreground text-md leading-[1.5rem]">
                    Simply put your email or phone number to continue.
                </p>
            </div>

            <TextField
                variant="vertical"
                label="Email or phone number"
                type="text"
                placeholder="Input email or phone number"
                inputClassName="h-[2.25rem] px-md py-sm  rounded-md border !gap-sm"
            />

            {/* Continue (328×36) */}
            <Button
                size="md"
                className="w-full justify-center rounded-md font-medium text-[0.875rem] leading-[1.25rem] px-md py-sm "
                type="button"
                onClick={() => onLoginSuccess?.("")}
            >
                Continue
            </Button>

            <div className="w-full h-full grid grid-cols-[1fr_auto_1fr] items-center gap-lg">
                <hr className="border-t border-border-subtle" />
                <span className="font-medium text-[0.875rem] leading-xs text-muted-foreground">
                    OR
                </span>
                <hr className="border-t border-border-subtle" />
            </div>

            <Button
                size="md"
                variant="outline"
                className="w-full h-[2.25rem] rounded-md justify-center gap-sm"
                type="button"
            >
                <img
                    src="/icons/ic-google.svg"
                    alt=""
                    className="w-[1rem] h-[1rem]"
                />
                <span className="font-medium text-[0.875rem] leading-[1.25rem] py-sm">
                    Continue with Google
                </span>
            </Button>

            {/* Terms (328×40, teks 14/20 muted + link underline) */}
            <p className="w-full text-muted-foreground text-[0.875rem] leading-[1.25rem]">
                By clicking continue, you agree to Mining Digital Platforms{" "}
                <a className="underline text-link">Terms of Use</a> and{" "}
                <a className="underline text-link">Privacy Policy</a>
            </p>
        </div>
    );
}
