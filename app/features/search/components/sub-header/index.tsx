import { useOutletContext } from "react-router";
import type { ContextType } from "~/root";
import SubHeaderDesktop from "~/features/search/components/sub-header/SubHeaderDesktop";
import SubHeaderMobile from "~/features/search/components/sub-header/SubHeaderMobile";

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

export type SubHeaderProps = {
    type: "default" | "simple";
    url: BreadcrumbItem[];
};

export default function SubHeader({ type, url }: SubHeaderProps) {
    const { isMobile } = useOutletContext<ContextType>();
    return isMobile ? (
        <SubHeaderMobile />
    ) : (
        <SubHeaderDesktop type={type} url={url} />
    );
}
