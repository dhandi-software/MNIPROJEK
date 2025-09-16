import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import AuthFormMobile from "~/components/template/auth-form/AuthFormMobile";
import AuthFormDesktop from "~/components/template/auth-form/AuthFormDesktop";

export interface AuthFormProps {
    // TODO change result type data when integration
    onLoginSuccess: (result: any) => void;
    isDialog?: boolean;
}

export default function AuthForm({ ...props }: AuthFormProps) {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? (
        <AuthFormMobile {...props} />
    ) : (
        <AuthFormDesktop {...props} isDialog={false}/>
    );
}
