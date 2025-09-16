import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/TextField";

export function FillPasswordFormDesktop() {
    return (
        <>
            <h1 className="text-heading-h4 text-foreground">
                Fill account information
            </h1>
            <TextField
                label="Full name"
                placeholder="Input your full name"
                variant="vertical"
                size="lg"
                className="mt-lg"
            />
            <TextField
                label="New password"
                placeholder="Input your password"
                variant="vertical"
                size="lg"
                className="mt-lg"
            />
            <span className="text-desc text-muted-foreground mt-sm">
                Password for sign in to the platform
            </span>
            <Button size={"lg"} className="w-full mt-xl">Register</Button>
        </>
    );
}
