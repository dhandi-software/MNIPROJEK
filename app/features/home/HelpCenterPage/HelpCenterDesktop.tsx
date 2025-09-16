// src/routes/help-center/HelpCenterDesktop.tsx
import { Search } from "lucide-react";
import SubHelp from "~/features/home/sub-helpcenter";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { TabsHelpDesktop } from "~/features/home/tabshelp/TabsHelpDesktop";
import { FaqHelpDesktop } from "~/features/home/faqHelp/FaqHelpDesktop";
import { InfoSignUpDesktop } from "~/features/home/sections/info-signup";

export function HelpCenterDesktop() {
    return (
        <>
            {/* canvas 1440 */}
            <section className="relative isolate mx-auto h-[21.875rem] overflow-hidden ">
                <div className="absolute inset-x-0 top-0 -z-10  overflow-hidden">
                    <img
                        src="/images/Helpcenterimage.svg"
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* content  */}
                <div className="relative z-10 mx-auto w-full max-w-[90rem]">
                    <h1 className="absolute left-[5rem] top-[9rem] w-[75rem] font-bold text-[3rem] leading-[3.375rem] text-primary-foreground">
                        Hi, how can we help you?
                    </h1>

                    {/* Search  */}
                    <div className="absolute left-[5rem] top-[14.375rem] w-[43.4375rem]">
                        <div className="h-[3.75rem] shadow-xs">
                            <div className="flex h-full items-center gap-[0.375rem] rounded-lg border border-subtle bg-zinc-100 px-[0.75rem]">
                                <Search className="size-[1.5rem] shrink-0 text-muted-foreground" />
                                <Input
                                    placeholder="Search any topics and more"
                                    className="h-[2.5rem] flex-1 bg-transparent border-none shadow-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-transparent"
                                />
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="inline-flex h-[2.5rem] w-[5rem] items-center justify-center  shadow-xs"
                                    aria-label="Search"
                                >
                                    <Search className="size-[1rem]" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header kecil */}
                <div className="absolute inset-x-0 top-0 h-[4.25rem] px-[5rem] py-[1.5rem]">
                    <SubHelp />
                </div>
            </section>
            <section className="border-b border-subtle bg-white p-4xl">
                <div className="mx-auto w-full max-w-[82.5rem]">
                    {/* Text 1320×36 */}
                    <div className="mb-2xl">
                        <h2 className="text-heading-h2 font-bold text-foreground">
                            Guide
                        </h2>
                    </div>

                    {/* Container 1320×262, gap 16 */}
                    <div className="grid grid-cols-3 gap-md">
                        {/* Column 1 */}
                        <article className="flex h-full w-full flex-col gap-md rounded-lg border border-subtle bg-background p-xl shadow-sm">
                            <img
                                src="/images/PhoneAbout.svg"
                                alt=""
                                className="size-[5rem]"
                            />
                            <div className="flex flex-col gap-xs">
                                <h3 className="text-label-lg font-medium text-foreground">
                                    Getting started as Attendee
                                </h3>
                                <p className="text-paragraph text-muted-foreground">
                                    Explore what to do if you’re new as a guest
                                    on MDP. Whether it’s looking for conference,
                                    joining an event, you’ll find out how to get
                                    started.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="h-[2.25rem] w-[6.4375rem] px-md"
                                >
                                    Read more
                                </Button>
                            </div>
                        </article>

                        <article className="flex h-full w-full flex-col gap-md rounded-lg border border-subtle bg-background p-xl shadow-sm">
                            <img
                                src="/images/TabAbout.svg"
                                alt=""
                                className="size-[5rem]"
                            />
                            <div className="flex flex-col gap-xs">
                                <h3 className="text-label-lg font-medium text-foreground">
                                    How to become Organizer
                                </h3>
                                <p className="text-paragraph text-muted-foreground">
                                    Explore what to do if you’re new as a guest
                                    on MDP. Whether it’s looking for conference,
                                    joining an event, you’ll find out how to get
                                    started.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="h-[2.25rem] w-[6.4375rem] px-md"
                                >
                                    Read more
                                </Button>
                            </div>
                        </article>

                        {/* Column 3 */}
                        <article className="flex h-full  w-full flex-col gap-md rounded-lg border border-subtle bg-background p-xl shadow-sm">
                            <img
                                src="/images/MarketingImage.svg"
                                alt=""
                                className="size-[5rem]"
                            />
                            <div className="flex flex-col gap-xs">
                                <h3 className="text-label-lg font-medium text-foreground">
                                    How to become Speaker/Host
                                </h3>
                                <p className="text-paragraph text-muted-foreground">
                                    Explore what to do if you’re new as a guest
                                    on MDP. Whether it’s looking for conference,
                                    joining an event, you’ll find out how to get
                                    started.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="h-[2.25rem] w-[6.4375rem] px-md"
                                >
                                    Read more
                                </Button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white p-4xl">
                <div className="mx-auto px-4xl w-full  flex flex-col gap-2xl">
                    {/* Text 1320×36 */}
                    <div className="h-[2.25rem] flex flex-col justify-center">
                        <h2 className="text-heading-h2 font-bold text-foreground">
                            Browse popular topics
                        </h2>
                    </div>

                    <TabsHelpDesktop />
                    <FaqHelpDesktop />
                </div>
            </section>

            <InfoSignUpDesktop />
        </>
    );
}
