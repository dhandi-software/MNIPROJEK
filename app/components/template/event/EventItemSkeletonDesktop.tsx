import { Skeleton } from "~/components/ui/skeleton";

// EventCardSkeleton UI
export function EventCardSkeleton() {
    return (
        // Card 327.67×420 → ~20.5rem × 26.25rem
        <div className="w-[20.5rem] h-[26.25rem] rounded-md bg-background shadow-xs overflow-hidden">
            <div className="w-full h-[11.75rem] mx-auto  bg-bw-black-5 animate-pulse" />

            <div className="w-[20.1875rem] h-[14.5625rem] mx-auto p-lg flex flex-col gap-md">
                <Skeleton className="w-[18.1875rem] h-[1.25rem]" />

                <div className="flex flex-col gap-[1.25rem]">
                    <Skeleton className="w-[13.8125rem] h-[0.625rem] rounded-[0.625rem]" />
                    <Skeleton className="w-[13.8125rem] h-[0.625rem] rounded-[0.625rem]" />
                    <Skeleton className="w-[11.4375rem] h-[0.625rem] rounded-[0.625rem]" />
                </div>
                <Skeleton className="w-[18.1875rem] h-[2rem]" />
            </div>
        </div>
    );
}

// Using EventItemSkeletonDesktop
export function EventItemSkeletonDesktop({ count = 6 }: { count?: number }) {
    return (
        // 1016×864, gap 24px (gap-xl)
        <div className="w-[63.5rem] h-[54rem] grid grid-cols-3 gap-xl">
            {Array.from({ length: count }).map((_, i) => (
                <EventCardSkeleton key={i} />
            ))}
        </div>
    );
}
