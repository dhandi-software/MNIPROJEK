import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

const events = [
    {
        id: 1,
        img: "/images/event1.jpg",
        title: "Premier conference for Sustainable Mining, Energy, & Oil Innovations.",
        date: "9 - 11 Sep 2025 | Jakarta, Indonesia",
        price: "IDR 100.000",
    },
    {
        id: 2,
        img: "/images/event2.jpg",
        title: "Tech Innovations & Future Energy Forum.",
        date: "15 - 17 Oct 2025 | Bali, Indonesia",
        price: "IDR 150.000",
    },
    {
        id: 3,
        img: "/images/event1.jpg",
        title: "Global Oil & Gas Summit.",
        date: "20 - 22 Nov 2025 | Surabaya, Indonesia",
        price: "IDR 120.000",
    },
];

export function CountdownEventDesktop() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    };

    return (
        <div className="relative w-full h-[35rem] flex items-center justify-between overflow-hidden px-3xl text-primary-foreground">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/countdownevent.jpg"
                    alt="Event Background"
                    className="w-full h-full object-cover object-bottom rotate-y-180"
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(#DE744D, #4E1500)",
                        mixBlendMode: "multiply",
                    }}
                ></div>
            </div>

            {/* Overlay Text */}
            <div className="relative z-10 w-1/2 px-12">
                <h2 className="text-heading-h1 mb-4 leading-tight">
                    Last minute chance.
                    <br />
                    Don’t miss to attend this <br />
                    popular event!
                </h2>
            </div>

            {/* Card Stack */}
            <div className="relative z-10 w-[25rem] h-[28.125rem] flex items-center justify-center mr-[5rem]">
                {events.slice(0, 5).map((event, index) => {
                    const position =
                        (index - currentIndex + events.length) % events.length;

                    if (position > 2) return null;

                    return (
                        <motion.div
                            key={event.id}
                            className="absolute w-[25rem] h-[31.25rem] rounded-2xl shadow-xl overflow-hidden bg-primary/80 backdrop-blur-md"
                            style={{ zIndex: 10 - position }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: position * 15,
                                y: position * 5,
                                scale: 1 - position * 0.05,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Image Layer */}
                            <img
                                src={event.img}
                                alt="Event"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay Dark Gradient */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `
                                      linear-gradient(180deg, #00000000 10.8%, #000000CC 67.9%),
                                      linear-gradient(337.01deg, #00000000 50.76%, #FF690066 86.39%)
                                    `,
                                }}
                            ></div>

                            {/* Content Layer */}
                            <div className="relative z-10 flex flex-col h-full justify-end p-lg">
                                {/* Countdown */}
                                <div className="bg-[#FF5B01] mx-auto w-[23rem] py-sm px-lg text-primary-foreground font-geist-mono text-lg flex justify-start gap-sm rounded-t-lg">
                                    <div>
                                        <p className="text-2xl font-bold">
                                            10 :
                                        </p>
                                        <span className="text-md font-geist">
                                            Day
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">
                                            20 :
                                        </p>
                                        <span className="text-md font-geist">
                                            Hour
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">35</p>
                                        <span className="text-md font-geist">
                                            Min
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="bg-primary/60 backdrop-blur-xs mx-auto w-[23rem] h-[12.5rem] p-lg text-primary-foreground font-geist text-lg rounded-b-md flex flex-col justify-between">
                                    {/* Bagian atas: Title + Date */}
                                    <div>
                                        <h3 className="text-heading-h4 !font-bold">
                                            {event.title}
                                        </h3>
                                        <p className="text-paragraph mt-sm text-background">
                                            {event.date}
                                        </p>
                                    </div>

                                    {/* Bagian bawah: Harga + Tombol */}
                                    <div className="flex justify-between items-center mt-auto">
                                        <p className="text-subheading-h5 font-geist-mono text-background">
                                            {event.price}
                                        </p>
                                        <Button
                                            size="md"
                                            variant="secondary"
                                            className="gap-sm"
                                        >
                                            <Plus className="size-lg" />
                                            <span className="text-label">
                                                Book event now
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Prev Button */}
                <Button
                    variant="outline"
                    onClick={prevCard}
                    size="lg"
                    className="absolute left-[-70px] hover:bg-foreground/40 py-sm px-lg"
                >
                    <ChevronLeft className="size-lg" />
                </Button>

                {/* Next Button */}
                <Button
                    variant="outline"
                    onClick={nextCard}
                    size="lg"
                    className="absolute right-[-70px] hover:bg-foreground/40 py-sm px-lg"
                >
                    <ChevronRight className="size-lg" />
                </Button>
            </div>
        </div>
    );
}
