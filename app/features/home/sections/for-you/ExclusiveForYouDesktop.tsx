import { Button } from "~/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "~/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";
import { useNavigate } from "react-router";

interface CardForYouProps {
    isFirstItem?: boolean;
    isLastItem?: boolean;
    category: string;
    title: string;
    date: string;
    place: string;
    desc: string;
}
function CardForYou({
    isFirstItem = false,
    isLastItem = false,
    category,
    title,
    date,
    place,
    desc,
}: CardForYouProps) {
    const navigate = useNavigate();
    return (
        <Card
            className={cn(
                "w-[65.063rem] h-[25rem] p-0 grid grid-cols-[28.125rem_1fr] gap-x-3xl",
                isLastItem && "mr-4xl",
                isFirstItem
                    ? "bg-gradient-to-r from-[#1937CA] to-[#0C68B4]"
                    : "bg-brand-primary-foreground"
            )}
        >
            <img
                src="/images/foryou.svg"
                className="rounded-l-lg h-full w-full object-cover"
                alt="foryou"
            />
            <div className="flex flex-col py-3xl pr-2xl">
                <span
                    className={cn(
                        "!text-label-lg !mb-[0.625rem]",
                        isFirstItem
                            ? "text-brand-primary-foreground"
                            : "text-muted-foreground"
                    )}
                >
                    {category}
                </span>
                <h1
                    className={cn(
                        "!text-heading-h2 !mb-[0.625rem]",
                        isFirstItem
                            ? "text-brand-primary-foreground"
                            : "text-foreground"
                    )}
                >
                    {title}
                </h1>
                <div
                    className={cn(
                        "flex flex-row !mb-[0.625rem] text-subheading-h4",
                        isFirstItem
                            ? "text-brand-primary-foreground"
                            : "text-foreground"
                    )}
                >
                    <span className="!font-semibold">{date}</span>&nbsp;-&nbsp;
                    <span className="!font-medium">{place}</span>
                </div>
                <p
                    className={cn(
                        "line-clamp-2 !text-paragraph-lg",
                        isFirstItem
                            ? "text-brand-primary-foreground"
                            : "text-muted-foreground"
                    )}
                >
                    {desc}
                </p>
                <Button
                    className={cn(
                        "w-fit self-end mt-xl",
                        !isFirstItem && "bg-[#FF5B01]"
                    )}
                    size={"lg"}
                    onClick={() => {
                        navigate("/discover-events/1");
                    }}
                >
                    Join event
                </Button>
            </div>
        </Card>
    );
}

export function ExclusiveForYouDesktop() {
    return (
        <section className="flex flex-col py-4xl">
            <Carousel>
                <div className="flex flex-row justify-between px-4xl gap-x-2xl items-center">
                    <div className="flex flex-col">
                        <h1 className="text-heading-h1 text-foreground">
                            Exclusive for you
                        </h1>
                        <p className="text-paragraph-lg text-muted-foreground mt-lg">
                            The best in the industry take the stage — not just
                            to inspire but to share the sacred knowledge that
                            underpinned their most significant breakthroughs.
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-lg">
                        <CarouselPrevious>
                            <Button
                                className="w-[5rem]"
                                size={"icon"}
                                variant={"outline"}
                            >
                                <ArrowLeft />
                            </Button>
                        </CarouselPrevious>
                        <CarouselNext>
                            <Button className="w-[5rem]" size={"icon"}>
                                <ArrowRight />
                            </Button>
                        </CarouselNext>
                    </div>
                </div>
                <CarouselContent className="gap-x-xl px-4xl mt-2xl">
                    <CarouselItem className="shrink min-w-none ">
                        <CardForYou
                            isFirstItem={true}
                            category="Mining & Oil"
                            title="Premier conference for Sustainable Mining, Energy, & Oil Innovations."
                            date="10 - 15 Aug 2025"
                            place="Live in Copenhagen, Berlin"
                            desc="Join us for an immersive experience showcasing cutting-edge advancements in Sustainable Mining, Energy, and Oil sectors. There’s ton of speaker all over the world..."
                        />
                    </CarouselItem>

                    <CarouselItem className="shrink min-w-none">
                        <CardForYou
                            isLastItem={true}
                            category="Mining & Oil"
                            title="Premier conference for Sustainable Mining, Energy, & Oil Innovations."
                            date="10 - 15 Aug 2025"
                            place="Live in Copenhagen, Berlin"
                            desc="Join us for an immersive experience showcasing cutting-edge advancements in Sustainable Mining, Energy, and Oil sectors. There’s ton of speaker all over the world..."
                        />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    );
}
