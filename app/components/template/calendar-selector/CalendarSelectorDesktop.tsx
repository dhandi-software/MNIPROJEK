import { cn } from "~/lib/utils";
export function CalendarSelectorDesktop({
    isActive,
    day,
}: {
    isActive: boolean;
    day: string;
}) {
    return (
        <div
            className={cn(
                "size-4xl flex flex-col border rounded-md shadow-xs cursor-pointer",
                isActive ? "border-foreground" : "border-subtle"
            )}
        >
            <span
                className={cn(
                    "min-h-xl bg-black/5 flex items-center justify-center rounded-t-md text-label",
                    isActive ? "text-foreground" : "text-muted-foreground"
                )}
            >
                Aug
            </span>
            <span
                className={cn(
                    "flex h-full items-center justify-center text-muted-foreground text-heading-h4",
                    isActive ? "text-foreground" : "text-muted-foreground"
                )}
            >
                {day}
            </span>
        </div>
    );
}
