import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/TextField";
import type { AuthFormProps } from ".";
import { cn } from "~/lib/utils";
export default function AuthFormDesktop({
    onLoginSuccess,
    isDialog = true,
}: AuthFormProps) {
    return (
        <>
            <h1
                className={cn(
                    "text-foreground",
                    isDialog ? "text-heading-h4 mb-lg" : "text-heading-h3"
                )}
            >
                {!isDialog ? "Sign in or Create an account" : "Sign in"}
            </h1>
            {!isDialog && (
                <p className="mb-xl text-paragraph text-muted-foreground">
                    Simply put your email or phone number to continue.
                </p>
            )}
            <TextField
                label="Email or phone number"
                placeholder="Input email or phone number"
                variant="vertical"
                size="lg"
            />
            {isDialog && (
                <TextField
                    label="Password"
                    placeholder="Input your password"
                    variant="vertical"
                    size="lg"
                    className="mt-lg"
                />
            )}
            <Button
                className="mt-lg w-full"
                size={"lg"}
                onClick={() => {
                    onLoginSuccess("");
                }}
            >
                Continue
            </Button>
            <div className="grid grid-cols-[1fr_1.25rem_1fr] items-center gap-x-lg my-lg">
                <hr className="border-t border-border-subtle" />
                <span className="text-muted-foreground text-label">OR</span>
                <hr className="border-t border-border-subtle" />
            </div>
            <Button
                className={cn("w-full", !isDialog && "mb-lg")}
                size={"lg"}
                variant={"outline"}
            >
                <img
                    src="icons/ic-google.svg"
                    className="size-lg"
                    alt="ic_google"
                />
                Continue with Google
            </Button>
            {!isDialog && (
                <div className="mb-3xl text-paragraph-sm text-muted-foreground">
                    By clicking continue, you agree to Mining Digital Platforms{" "}
                    <span className="underline text-link cursor-pointer">
                        Terms of Use
                    </span>{" "}
                    and{" "}
                    <span className="underline text-link cursor-pointer">
                        Privacy Policy
                    </span>
                </div>
            )}
        </>
    );
}
