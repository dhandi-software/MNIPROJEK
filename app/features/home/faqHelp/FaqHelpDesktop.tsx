import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export function FaqHelpDesktop() {
    type FaqItem = { q: string; a: string };

    const ITEMS: FaqItem[] = [
        {
            q: "Where I can stay during the event?",
            a: "Looking for a place to kick back and relax after a full day of networking? There are loads of great hotels within walking distance. There are features in the website to experience nearby event venue.",
        },
        { q: "Who is organising this event?", a: "20 - 22 August 2025" },
        { q: "What's included in my ticket?", a: "20 - 22 August 2025" },
        {
            q: "Can I pre-select workshop sessions prior to the event?",
            a: "20 - 22 August 2025",
        },
        { q: "Accessibility across the venue?", a: "20 - 22 August 2025" },
    ];

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-background text-foreground w-full  border-border-subtle  flex flex-col">
            <div className="w-full flex flex-col">
                {ITEMS.map((item, i) => {
                    const isOpen = open === i;
                    return (
                        <div
                            key={i}
                            className="w-full border-b border-border-subtle last:border-transparent"
                        >
                            {/* Label (56px) */}
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setOpen(isOpen ? null : i)}
                                className="w-full h-[3.5rem] flex items-center justify-between gap-sm py-lg"
                            >
                                <span className="text-label-lg text-foreground">
                                    {item.q}
                                </span>

                                <ChevronDown
                                    size={24}
                                    className={cn(
                                        "text-muted-foreground transition-transform duration-300",
                                        isOpen && "rotate-180"
                                    )}
                                />
                            </button>

                            {/* Deskripsi + link (muncul saat open) */}
                            {isOpen && (
                                <div className="w-full max-w-[82.5rem] pb-lg">
                                    <p className="text-muted-foreground text-paragraph-sm mb-sm">
                                        {item.a}
                                    </p>

                                    {/* Button link: 74×20, radius 8, gap 8 */}
                                    <Button
                                        asChild
                                        variant="link"
                                        size="md"
                                        className="w-[4.625rem] h-[1.25rem] p-0 rounded-md gap-2"
                                    >
                                        <a href="#">See details</a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className="w-full max-w-[82.5rem] pt-sm mx-auto flex justify-center mt-lg">
                    <Button
                        variant="secondary"
                        size="md"
                        className="items-center h-9 w-[6.6875rem] rounded-md px-4 gap-2"
                    >
                        <span className="text-label text-secondary-foreground">
                            View all
                        </span>
                        <ChevronRight className="w-[1.125rem] h-[1.125rem]" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
