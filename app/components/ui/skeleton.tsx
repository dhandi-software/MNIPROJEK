/*
Using Skeleton

<Skeleton className="w-[12.125rem] h-[1.25rem]" />
*/

import { cn } from "~/lib/utils";

export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "bg-bw-black-5 rounded-sm shadow-xs animate-pulse",
                className
            )}
        />
    );
}
