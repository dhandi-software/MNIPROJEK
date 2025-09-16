import { Label } from "~/components/ui/label";
import { InputOTP } from "~/components/ui/input-otp";
import { TextField } from "~/components/ui/TextField";
import { Button } from "~/components/ui/button";

export function RegisterFormDesktop() {
    return (
        <>
            <h1 className="text-heading-h4 text-foreground">
                Register account
            </h1>
            <TextField
                label="Email or phone number"
                placeholder="Input email or phone number"
                variant="vertical"
                size="lg"
                className="mt-lg"
            />
            <Label size="lg" className="mt-lg">
                OTP Code
            </Label>
            <div className="flex flex-row justify-between items-center mt-sm">
                <InputOTP />
                <Button variant={"link"} size={"md"}>
                    Send OTP
                </Button>
            </div>
            <span className="text-desc mt-sm text-muted-foreground">
                Check your email or phone for the code
            </span>
        </>
    );
}
