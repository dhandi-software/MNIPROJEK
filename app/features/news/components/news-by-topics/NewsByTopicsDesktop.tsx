import { ChevronsUpDown } from "lucide-react";
import { useRef, useState } from "react";
import NewsItemDesktop from "~/components/template/news/NewsItemDesktop";
import { Button } from "~/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "~/components/ui/popover";
import type { NewsItem } from "~/components/template/news";

export default function NewsByTopicsDesktop({
    newsData,
}: {
    newsData: NewsItem[];
}) {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [openSortBy, setopenSortBy] = useState(false);

    return (
        <section className="p-[3.75rem] border-b border-border-subtle flex flex-col gap-xl">
            <h1 className="text-heading-h1 text-foreground">News by topics</h1>

            {/* filtering */}
            <div className="flex justify-between">
                <div className="flex gap-lg">
                    {["All", "Events", "Product", "Network", "Community"].map(
                        (topic, idx) => (
                            <Button
                                key={idx}
                                variant="outline"
                                size="lg"
                                className={`py-sm px-2xl rounded-[4.125rem] shadow-xs ${
                                    topic === "All"
                                        ? "border-[#FF5B01]"
                                        : "border-border-divider"
                                }`}
                            >
                                <span className="text-label text-secondary-foreground">
                                    {topic}
                                </span>
                            </Button>
                        ),
                    )}
                </div>
                <div>
                    <Popover open={openSortBy} onOpenChange={setopenSortBy}>
                        <PopoverTrigger asChild>
                            <Button
                                ref={triggerRef}
                                variant="outline"
                                role="combobox"
                                aria-expanded={openSortBy}
                                className="!py-[0.875rem] px-lg flex items-center justify-between rounded-md"
                            >
                                <span className="text-label-lg text-muted-foreground text-start w-[6.625rem]">
                                    Sort by
                                </span>
                                <ChevronsUpDown className="size-lg text-muted-foreground" />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent
                            className="p-0"
                            side="top"
                            align="start"
                            style={{ width: triggerRef.current?.offsetWidth }}
                        >
                            <Command>
                                <CommandInput
                                    placeholder="Sort by"
                                    className="h-[2.25rem]"
                                />
                                <CommandList>
                                    <CommandEmpty>No data found</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem>Name</CommandItem>
                                        <CommandItem>Date</CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* cards */}
            <div className="flex flex-col gap-xl">
                {newsData.map((news) => (
                    <NewsItemDesktop key={news.id} news={news} />
                ))}
            </div>
        </section>
    );
}
