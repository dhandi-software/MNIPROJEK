import { SlashIcon } from "lucide-react";
import { Link } from "react-router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
export function SubAboutDesktop() {
    return (
        <Breadcrumb className="gap-x-lg px-4xl py-xl border-b border-subtle">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link
                            to="/"
                            className="text-label !font-medium !text-brand-secondary-muted-foreground"
                        >
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="!text-brand-secondary-muted-foreground">
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <span className="text-foreground text-label !font-medium">
                            About MDP
                        </span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
