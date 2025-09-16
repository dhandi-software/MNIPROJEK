import { Share2 } from "lucide-react";
import SubHeader from "~/features/search/components/sub-header";

export function NewsDetailDesktop() {
    return (
        <main className="flex flex-col">
            <SubHeader
                type="simple"
                url={[
                    { label: "Home", href: "/" },
                    { label: "Newsroom", href: "/" },
                    { label: "Detail news" },
                ]}
            />
            <div className="border-b border-border-subtle p-3xl px-[12.5rem]">
                {/* header */}
                <div className="flex flex-col gap-md pt-3xl pb-xl">
                    <h1 className="text-heading-h2 text-foreground">
                        MDP has achieved a significant milestone by advancing to
                        a new stage beyond the Global Network
                    </h1>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-[0.375rem] text-paragraph-sm text-muted-foreground">
                            <p>Created by MDP</p>
                            <img src="/icons/ic_divider.svg" alt="divider" />
                            <p>17 July 2025</p>
                            <img src="/icons/ic_divider.svg" alt="divider" />
                            <p>Network, Community</p>
                        </div>
                        <div className="flex gap-lg">
                            <img
                                src="/icons/ic_linkedin.svg"
                                alt="linkedin"
                                className="size-xl"
                            />
                            <img
                                src="/icons/ic_facebook.svg"
                                alt="facebook"
                                className="size-xl"
                            />
                            <img
                                src="/icons/ic_x.svg"
                                alt="x"
                                className="size-xl"
                            />
                            <img
                                src="/icons/ic_whatsapp.svg"
                                alt="whatsapp"
                                className="size-xl"
                            />
                            <Share2 className="size-xl" />
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="flex flex-col gap-2xl">
                    <img
                        src="/images/latest-news-1.jpg"
                        alt="News Detail"
                        className="w-full h-[25rem] object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-lg">
                        <p className="text-subheading-h5 text-foreground">
                            From exclusive podcast tapings and fashion
                            challenges to candlelit omakase and samurai
                            swordplay, it's now easier to find extraordinary
                            experiences designed exclusively for Airbnb, with an
                            all-new "Originals" filter available today.
                        </p>
                        <p className="text-paragraph text-muted-foreground">
                            Europe's battery raw materials market is entering a
                            new era. With momentum behind CRMA-backed
                            initiatives, rising demand for EVs and energy
                            storage, and fresh funding supporting supply chain
                            growth, the outlook is strong. The European Battery
                            Raw Materials Conference 2025 takes place from
                            September 16 to 18 at Convento do Beato in Lisbon.
                            After several years in Amsterdam, the move to Lisbon
                            signals a fresh chapter for the industry and the
                            event. Join leaders from across the battery value
                            chain, including mining, refining, cathode and anode
                            production, cell manufacturing, automotive and
                            energy storage.
                        </p>
                    </div>
                    <div className="flex flex-col gap-lg">
                        <p className="text-subheading-h5 text-foreground">
                            From exclusive podcast tapings and fashion
                            challenges to candlelit omakase and samurai
                            swordplay, it's now easier to find extraordinary
                            experiences designed exclusively for Airbnb, with an
                            all-new "Originals" filter available today.
                        </p>
                        <p className="text-paragraph text-muted-foreground">
                            Europe's battery raw materials market is entering a
                            new era. With momentum behind CRMA-backed
                            initiatives, rising demand for EVs and energy
                            storage, and fresh funding supporting supply chain
                            growth, the outlook is strong. The European Battery
                            Raw Materials Conference 2025 takes place from
                            September 16 to 18 at Convento do Beato in Lisbon.
                            After several years in Amsterdam, the move to Lisbon
                            signals a fresh chapter for the industry and the
                            event. Join leaders from across the battery value
                            chain, including mining, refining, cathode and anode
                            production, cell manufacturing, automotive and
                            energy storage.
                        </p>
                    </div>
                    <div className="flex flex-col gap-lg">
                        <p className="text-subheading-h5 text-foreground">
                            From exclusive podcast tapings and fashion
                            challenges to candlelit omakase and samurai
                            swordplay, it's now easier to find extraordinary
                            experiences designed exclusively for Airbnb, with an
                            all-new "Originals" filter available today.
                        </p>
                        <p className="text-paragraph text-muted-foreground">
                            Europe's battery raw materials market is entering a
                            new era. With momentum behind CRMA-backed
                            initiatives, rising demand for EVs and energy
                            storage, and fresh funding supporting supply chain
                            growth, the outlook is strong. The European Battery
                            Raw Materials Conference 2025 takes place from
                            September 16 to 18 at Convento do Beato in Lisbon.
                            After several years in Amsterdam, the move to Lisbon
                            signals a fresh chapter for the industry and the
                            event. Join leaders from across the battery value
                            chain, including mining, refining, cathode and anode
                            production, cell manufacturing, automotive and
                            energy storage.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
