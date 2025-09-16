import SubHeader from "~/features/home/sub-about";

type Founder = { name: string; role: string; img: string };

const FOUNDERS: Founder[] = [
    {
        name: "Michael Suhendra",
        role: "Founders of MDP",
        img: "/images/speaker_dummy_2.svg",
    },
    {
        name: "Andreas Wijaya",
        role: "Co-Founders of MDP",
        img: "/images/speaker_dummy_1.svg",
    },
    {
        name: "Tiffany Widjaya",
        role: "Chief of Growth",
        img: "/images/speaker_dummy_1.svg",
    },
];

export function AboutDesktop() {
    return (
        <div className="w-full bg-background">
            {/* Canvas 1440 */}
            <div className="mx-auto w-full ">
                <SubHeader />
                <section className="border-b border-border-subtle bg-background">
                    <div className="mx-auto w-full px-[3.75rem] py-[3.75rem]">
                        <div className="grid grid-cols-2 items-center justify-between gap-2xl">
                            {/* TEXT */}
                            <div className="flex flex-col gap-lg w-full">
                                <h2 className="font-bold text-foreground text-heading-h1">
                                    Get to know about MDP
                                </h2>
                                <p className="text-foreground text-paragraph w-full">
                                    MDP was established in 2025 when a group of
                                    passionate innovators came together to
                                    create a platform for knowledge sharing and
                                    networking. Since then, MDP has expanded to
                                    host over 1,000 events, connecting thousands
                                    of attendees from various industries
                                    worldwide. Each event offers unique
                                    insights, workshops, and networking
                                    opportunities that empower participants to
                                    engage with thought leaders and enhance
                                    their professional journeys.
                                </p>
                            </div>

                            {/* IMG */}
                            <div className="justify-self-end">
                                <img
                                    src="/images/IMG.svg"
                                    alt="MDP event"
                                    className="w-[43.75rem] h-[28.125rem] rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Section: Meet the Founders (bg-elevated, p-60, gap-24) ===== */}
                <section className="bg-zinc-100 p-4xl">
                    <div className="mx-auto max-w-[82.5rem]">
                        <h2 className="mb-xl text-heading-h1 leading-[2.5rem] font-bold text-foreground">
                            Meet the Founders
                        </h2>

                        {/* 3 columns, card gap-24 */}
                        <div className="grid grid-cols-3 gap-xl">
                            {FOUNDERS.map((f) => (
                                <FounderCard key={f.name} {...f} />
                            ))}
                        </div>
                    </div>
                </section>
                {/* ===== Section: Vision & Mission ===== */}
                <section className="border-b border-subtle p-4xl">
                    <div className="mx-auto grid max-w-[82.5rem] grid-cols-2 gap-xl">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-md rounded-lg h-[18.75rem] border border-subtle bg-background p-xl shadow-md">
                            <div className="flex flex-col w-[37.5rem] h-[15.80rem] items-center gap-lg">
                                <h3 className="text-subheading-h3 text-foreground">
                                    Vision
                                </h3>
                                <p className="text-paragraph-lg text-muted-foreground text-center">
                                    To become the leading event platform that
                                    empowers users to connect and collaborate
                                    seamlessly, facilitating fair and
                                    transparent transactions for events
                                    worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-md rounded-lg h-[18.75rem] border border-subtle bg-background p-xl shadow-md">
                            <div className="flex flex-col h-[15.75rem] items-center gap-lg">
                                <h3 className="text-subheading-h3 text-foreground">
                                    Mission
                                </h3>
                                <ul className="text-paragraph-lg text-muted-foreground list-disc pl-xl">
                                    <li>
                                        Our mission is to revolutionize the
                                        event experience by providing a dynamic
                                        platform that fosters meaningful
                                        connections and collaboration among
                                        users.
                                    </li>
                                    <li>
                                        We strive to ensure that every
                                        transaction is conducted with integrity
                                        and transparency, making events
                                        accessible and enriching for
                                        participants around the globe.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer sudah kamu handle */}
            </div>
        </div>
    );
}

function FounderCard({ name, role, img }: Founder) {
    return (
        <div className="flex w-[26.5rem] flex-col gap-lg">
            <img
                src={img}
                alt={name}
                className="h-[23.75rem] w-[26.5rem] rounded-xl object-cover"
            />
            <div className="flex flex-col gap-xs">
                <span className="text-subheading-h5 font-semibold  text-foreground">
                    {name}
                </span>
                <span className="text-paragraph  text-muted-foreground">
                    {role}
                </span>
            </div>
        </div>
    );
}
