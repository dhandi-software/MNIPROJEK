// src/components/template/filter/FilterSkeleton.tsx
import { Skeleton } from "~/components/ui/skeleton";

export default function FilterListSkeletonDesktop() {
    return (
        <aside className="w-[17.5rem] h-[16.25rem] rounded-md bg-background shadow-xs flex flex-col gap-sm">
            <div className="h-[2.75rem] px-lg pt-lg pb-sm">
                <div className="w-[15.5rem] h-[1.25rem] flex items-center gap-[0.625rem]">
                    <Skeleton className="w-[12.125rem] h-[1.25rem]" />

                    <Skeleton className="w-[2.75rem] h-[1.25rem]" />
                </div>
            </div>

            <div className="h-[13rem] border-y border-bw-black-5 divide-y divide-bw-black-5">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="px-lg py-lg">
                        <div className="w-full h-full">
                            <Skeleton className="w-full h-[1.25rem]" />
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
