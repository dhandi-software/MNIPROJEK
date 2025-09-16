import { SlashIcon } from "lucide-react";
import { Link } from "react-router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
export function SubHelpDesktop() {
    return (
        <Breadcrumb className="gap-x-lg px-4xl ">
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
                        <span className="text-white text-label !font-medium">
                            Help Center
                        </span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
