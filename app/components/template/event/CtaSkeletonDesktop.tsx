// src/components/template/event/CtaSkeletonDesktop.tsx
import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/lib/utils";

export function CtaSkeletonDesktop({ className }: { className?: string }) {
    return (
        <div
            aria-busy="true"
            className={cn(
                "w-[82.5rem] h-[1.5rem] flex items-center justify-between", // 1320×24
                className
            )}
        >
            <Skeleton className="w-[14.25rem] h-[1.5rem] rounded-[0.125rem]" />

            <div className="w-[28.25rem] h-[1.5rem] flex items-center gap-lg">
                <Skeleton className="w-[8.75rem] h-[1.5rem] rounded-[0.125rem]" />
                <Skeleton className="w-[8.75rem] h-[1.5rem] rounded-[0.125rem]" />
                <Skeleton className="w-[8.75rem] h-[1.5rem] rounded-[0.125rem]" />
            </div>
        </div>
    );
}
