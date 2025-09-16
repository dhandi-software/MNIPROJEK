import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import AuthFormDesktop from "~/components/template/auth-form/AuthFormDesktop";
import { RegisterFormDesktop } from "~/components/template/register-form";
import { FillPasswordFormDesktop } from "~/components/template/fill-password-form";

export function CheckoutAuthFormSectionDesktop() {
    return (
        <Tabs defaultValue="register" className="w-full">
            <TabsList className="w-full h-[2.75rem] mb-lg">
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="login">Sign in</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <AuthFormDesktop onLoginSuccess={() => {}} isDialog={true} />
            </TabsContent>
            <TabsContent value="register">
                <RegisterFormDesktop />
                {/* <FillPasswordFormDesktop /> */}
            </TabsContent>
        </Tabs>
    );
}
