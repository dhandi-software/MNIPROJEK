import { Phone, Mail } from "lucide-react";
export default function FooterDesktop() {
    return (
        <footer
            data-slot="footer"
            className="bg-background text-foreground w-full"
        >
            <div className="mx-auto w-full py-4xl flex flex-col gap-xm">
                <div className="px-4xl w-full">
                    <div className="flex flex-col gap-2xl md:flex-row md:items-start md:justify-between">
                        {/* ───────── LeftContainer ───────── */}
                        <div className="flex w-full flex-col gap-2xl md:w-[43.0625rem]">
                            {/* Logo */}
                            <div className="flex h-[6.25rem] w-[11.8125rem] items-center gap-lg">
                                <div className="flex h-[4.125rem] w-[4.125rem] items-center justify-center rounded-md bg-[#FF5B01]">
                                    <img
                                        src="/icons/ic-pickaxe.svg"
                                        alt="MDP Logo"
                                        className="h-[2rem] w-[2rem]"
                                    />
                                </div>
                                <span className="font-eurostile text-[3rem] leading-[1] font-[850] text-neutral-950">
                                    MDP
                                </span>
                            </div>

                            {/* SiteMap */}
                            <div className="flex w-full flex-wrap gap-[3rem] ">
                                <div className="flex w-[7.688rem] h-[10.25rem] flex-col gap-lg">
                                    <div className="text-label-lg w-[5.75rem] h-[1.25rem]">
                                        Get Support
                                    </div>
                                    <ul className="flex flex-col gap-sm ">
                                        {[
                                            "Help Center",
                                            "Privacy Policy",
                                            "Cookies Settings",
                                            "Terms & Conditions",
                                        ].map((t) => (
                                            <li key={t}>
                                                <a
                                                    href="#"
                                                    className="w-[4.813rem] h-[1.25rem] text-neutral-950 text-paragraph-sm "
                                                >
                                                    {t}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Text Right  */}
                                <div className="flex w-[15rem] flex-col gap-lg">
                                    <div className=" text-label-lg w-[7.063rem] h-[1.25rem] ">
                                        Get to know us
                                    </div>
                                    <ul className="flex flex-col gap-sm ">
                                        {[
                                            "News Center",
                                            "Career",
                                            "About MDP",
                                        ].map((t) => (
                                            <li key={t}>
                                                <a
                                                    href="#"
                                                    className="text-foreground text-paragraph-sm w-[5.063rem] h-[1.25rem]"
                                                >
                                                    {t}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* DownloadApp  */}
                            <div className=" flex w-[26.5rem] h-[3.75rem] items-center gap-xl ">
                                <img
                                    src="/images/appstore.png"
                                    alt="App Store"
                                />
                                <img
                                    src="/images/googleplay.png"
                                    alt="Google Play"
                                />
                            </div>
                        </div>

                        {/* ───────── RightContainer ───────── */}
                        <div className="mt-2xl flex w-full flex-col gap-2xl md:mt-0 md:w-[36.8125rem]">
                            {/* Text */}
                            <div className="flex w-full flex-col gap-lg ">
                                <h2 className="text-heading-h3 ">
                                    Any questions?
                                </h2>
                                <p className="text-muted-foreground text-[1.25rem] leading-[1.75rem] font-paragraph w-[37.438rem] h-[3.25rem]">
                                    For more information related on event or
                                    registration process, please visit the{" "}
                                    <a
                                        href="#"
                                        className="underline text-link hover:text-link-hover"
                                    >
                                        Help center
                                    </a>{" "}
                                    page or contact below
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="flex w-[16.25rem] flex-col gap-lg pb-2xl ">
                                {/* Whatsapp */}
                                <div className="flex h-[3rem] items-center gap-md">
                                    <div className="flex h-3xl w-3xl items-center justify-center rounded-sm bg-neutral-100 p-sm">
                                        <Phone className="w-xl h-xl text-foreground gap-2.5" />
                                    </div>
                                    <div className="flex flex-col gap-xs">
                                        <span className="text-label-lg w-[4.813rem] h-[1.25rem]">
                                            Whatsapp
                                        </span>
                                        <span className="text-muted-foreground text-paragraph w-[6.938rem] h-6">
                                            +628111444144
                                        </span>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex h-[3rem] items-center gap-md">
                                    <div className="flex h-3xl w-3xl items-center justify-center rounded-sm bg-neutral-100 p-sm">
                                        <Mail className="w-xl h-xl text-foreground" />
                                    </div>
                                    <div className="flex flex-col gap-xs">
                                        <span className="text-label-lg w-[2.625rem] h-[1.25rem]">
                                            Email
                                        </span>
                                        <span className="text-muted-foreground text-paragraph w-[8.5rem] h-xl">
                                            cs@minedigs.co.id
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* SocMed */}
                            <div className="flex w-full h-[4.25rem] flex-col gap-lg  ">
                                <span className=" text-label-lg w-[11rem] h-[1.25rem] text-foreground">
                                    Follow our social media
                                </span>
                                <div className="flex h-2xl w-[9rem] items-center gap-xl ">
                                    <a
                                        href=""
                                        className="flex h-2xl w-2xl items-center justify-center text-secondary-foreground"
                                    >
                                        <img
                                            src="/icons/ic_linkedin.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-2xl w-2xl items-center justify-center text-secondary-foreground"
                                    >
                                        <img
                                            src="/icons/ic_facebook.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex w-2xl h-[1.375rem] items-center justify-center text-secondary-foreground"
                                    >
                                        <img
                                            src="/icons/ic_youtube.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
