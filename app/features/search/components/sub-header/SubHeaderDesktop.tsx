import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import type { SubHeaderProps } from "~/features/search/components/sub-header";

export default function SubHeaderDesktop({ type, url }: SubHeaderProps) {
    return (
        <div className="px-4xl py-xl border-b border-border-subtle flex flex-col items-start">
            <Breadcrumb>
                <BreadcrumbList>
                    {url.map((item, idx) => {
                        const isLast = idx === url.length - 1;

                        return (
                            <BreadcrumbItem key={idx}>
                                {isLast || !item.href ? (
                                    <BreadcrumbPage size="s" state="default">
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        href={item.href}
                                        size="s"
                                        state="inactive"
                                    >
                                        {item.label}
                                    </BreadcrumbLink>
                                )}

                                {!isLast && (
                                    <BreadcrumbSeparator tone="muted" />
                                )}
                            </BreadcrumbItem>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>

            {type === "default" && (
                <div className="flex flex-col">
                    <h1 className="text-heading-h4 text-foreground">
                        Mining Ecosystem
                    </h1>
                    <p className="text-paragraph text-muted-foreground">
                        A connected system that brings together the environment,
                        people, technology, and processes involved in mining.
                    </p>
                </div>
            )}
        </div>
    );
}
