import {
    ArrowUpRight,
    CirclePlus,
    CircleUser,
    MicVocal,
    PartyPopper,
    Ticket,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { MapPin, Search, Globe, ChevronDown } from "lucide-react";
import { Input } from "~/components/ui/input";
import { useLocation } from "react-router";
import { AvatarProfile } from "~/components/ui/avatar-group";
import { DropDownLanguages } from "~/components/ui/DropDownLanguage";

import { BookmarkButton } from "~/components/ui/BookmarkButton";
import { BellButton } from "~/components/ui/BellButton";

function SearchBar() {
    return (
        <div className="flex items-center rounded-lg border border-border-subtle px-md py-s w-[320px] h-full bg-brand-secondary-muted">
            <div className="flex items-center flex-1">
                <MapPin className="text-muted-foreground" size={24} />
                <Input
                    type="text"
                    placeholder="Find nearby event"
                    size={"lg"}
                    className="border-0 shadow-none"
                />
            </div>

            <Button
                size="icon"
                className="bg-orange-500 hover:bg-orange-600 ml-[0.37rem]"
            >
                <Search className="h-4 w-4 text-white" />
            </Button>
        </div>
    );
}

function LanguageSelector() {
    return (
        <div
            className={cn(
                "flex flex-row gap-x-xs items-center cursor-pointer text-foreground",
            )}
        >
            <span className="text-paragraph-sm font-medium gap-lg"></span>
        </div>
    );
}

export default function HeaderDesktop() {
    const location = useLocation();
    const fullPath = location.pathname; // e.g. "/discover-events/1"
    const trimmed = fullPath.startsWith("/") ? fullPath.slice(1) : fullPath; // "discover-events/1"

    const subNavList = [
        {
            label: "Help center",
            to: "",
        },
        {
            label: "Join partnership",
            to: "",
        },
        {
            label: "Become Speaker",
            to: "",
        },
        {
            label: "Become Organizer",
            to: "",
        },
    ];
    const mainNavList = [
        {
            label: "Discover events",
            to: "",
        },
    ];

    return (
        <header
            className={cn(
                "!h-[9.5rem] w-full px-4xl pt-lg pb-xl z-99 border-b border-subtle bg-white",
                !trimmed && "sticky top-0",
            )}
        >
            <div className="flex flex-col ">
                <nav className="flex justify-center items-center flex-row gap-x-xl py-sm justify-end h-9 gap-lg">
                    {subNavList.map((item, key) => {
                        return (
                            <Link
                                key={key}
                                to={""}
                                className={cn(
                                    "!text-label cursor-pointer hover:underline text-foreground",
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <DropDownLanguages />
                </nav>

                <div className="flex flex-row justify-between items-center mt-[1.75rem] h-[3rem]">
                    <nav className="flex flex-row gap-x-xl items-center">
                        <Link to="/" className="flex flex-row gap-x-lg">
                            <img src="/icons/ic_logo_primary.svg" alt="logo" />
                            <span className="font-eurostile text-foreground text-[2rem] !font-[900]">
                                MDP
                            </span>
                        </Link>
                        {mainNavList.map((item, key) => {
                            return (
                                <div
                                    key={key}
                                    className="relative flex group h-[3rem]"
                                >
                                    <div
                                        className={cn(
                                            "!h-full flex flex-row items-center gap-x-sm !text-label cursor-pointer font-medium !text-foreground px-2xl",
                                        )}
                                    >
                                        {item.label}
                                        <ChevronDown size={16} />
                                    </div>

                                    {/* Mega Menu */}
                                    <div className="absolute left-0 top-full hidden group-hover:block w-auto min-w-[300px] max-w-[90vw] z-40">
                                        <div className="flex bg-white shadow-md border border-subtle rounded-md mt-1">
                                            {/* Sidebar */}
                                            <ul className="w-48 border-r border-subtle p-lg bg-card">
                                                <Link
                                                    to="/discover-events"
                                                    className="flex w-full p-sm hover:bg-gray-100 hover:rounded-md cursor-pointer"
                                                >
                                                    View all
                                                </Link>
                                                <li className="p-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">
                                                    Ferrous Metals
                                                </li>
                                                <li className="p-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">
                                                    Non-ferrous Metals
                                                </li>
                                                <li className="p-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">
                                                    New Energy
                                                </li>
                                            </ul>

                                            {/* Main Columns - Using auto-fit for responsive columns */}
                                            <div className="flex flex-col p-xl">
                                                <h1 className="text-subheading-h5 text-foreground mb-md">
                                                    Non-ferrous Metals
                                                </h1>
                                                <div className="flex flex-row gap-x-md">
                                                    <div className="w-[10rem]">
                                                        <h3 className="font-semibold mb-xs py-sm">
                                                            Base Metals
                                                        </h3>
                                                        <ul className="text-sm text-muted-foreground">
                                                            <li className="py-sm">
                                                                Aluminum
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Copper
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Zinc
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Nickel
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Lead
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Tin
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="w-[10rem]">
                                                        <h3 className="font-semibold mb-xs py-sm">
                                                            Rare Earth
                                                        </h3>
                                                        <ul className="text-sm text-muted-foreground">
                                                            <li className="py-sm">
                                                                Concentrate
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Rare Earth Salts
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Rare Earth
                                                                Oxides
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Rare Earth
                                                                Metals
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Rare Earth
                                                                Magnet
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Other NdFeB
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="w-[10rem]">
                                                        <h3 className="font-semibold mb-xs py-sm">
                                                            Scrap Metals
                                                        </h3>
                                                        <ul className="text-sm text-muted-foreground">
                                                            <li className="py-sm">
                                                                Copper Scrap
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Aluminum Scrap
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Tin Scrap
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Steel Scrap
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="w-[10rem]">
                                                        <h3 className="font-semibold mb-xs py-sm">
                                                            Minor Metals
                                                        </h3>
                                                        <ul className="text-sm text-muted-foreground">
                                                            <li className="py-sm">
                                                                Silicon
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Magnesium
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Titanium
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Bismuth /
                                                                Selenium
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Tungsten
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Antimony
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="w-[10rem]">
                                                        <h3 className="font-semibold mb-xs py-sm">
                                                            Precious Metals
                                                        </h3>
                                                        <ul className="text-sm text-muted-foreground">
                                                            <li className="py-sm">
                                                                Gold
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Silver
                                                            </li>
                                                            <hr />
                                                            <li className="py-sm">
                                                                Other Precious
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </nav>
                    <SearchBar />

                    <div className="flex justify-center items-center flex-row gap-x-lg">
                        <BookmarkButton />
                        <BellButton />
                        <div className="relative group h-[3rem]">
                            <AvatarProfile
                                src="/avatar.png"
                                fallback="G"
                                shape={"round"}
                                size={"s"}
                                name="Gre"
                                desc="Attendee"
                                labelOnly={false}
                                containerClassName="h-full"
                            />
                            {/* Dropdown on hover */}
                            <div className="absolute right-0 py-xs hidden w-auto min-w-[13.438rem] group-hover:block z-40">
                                <div className="rounded-md border border-border-subtle bg-white shadow-md mt-sm">
                                    <div className="flex m-sm px-xs">
                                        <AvatarProfile
                                            src="/avatar.png"
                                            fallback="G"
                                            shape={"round"}
                                            size={"s"}
                                            name="Gre"
                                            desc="Attendee"
                                            containerClassName="h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col px-xs">
                                        <div className="flex flex-row items-center gap-x-sm p-sm cursor-pointer hover:rounded-md hover:bg-gray-100">
                                            <CircleUser
                                                size={16}
                                                className="text-muted-foreground"
                                            />
                                            <span className="text-paragraph-sm text-foreground">
                                                View profile
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-sm p-sm cursor-pointer hover:rounded-md hover:bg-gray-100">
                                            <Ticket
                                                size={16}
                                                className="text-muted-foreground"
                                            />
                                            <span className="text-paragraph-sm text-foreground">
                                                My tickets
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col px-xs">
                                        <div className="flex flex-row p-sm cursor-pointer hover:rounded-md hover:bg-gray-100 items-center justify-between">
                                            <div className="flex flex-row items-center gap-x-sm">
                                                <CirclePlus
                                                    size={16}
                                                    className="text-muted-foreground"
                                                />
                                                <span className="text-label text-foreground !leading-none">
                                                    Become Organizer
                                                </span>
                                            </div>
                                            <div className="bg-accent-warning rounded-md size-xl flex items-center justify-center">
                                                <PartyPopper
                                                    size={14}
                                                    className="text-accent-warning-foreground"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row p-sm cursor-pointer hover:rounded-md hover:bg-gray-100 items-center justify-between">
                                            <div className="flex flex-row items-center gap-x-sm">
                                                <CirclePlus
                                                    size={16}
                                                    className="text-muted-foreground"
                                                />
                                                <span className="text-label text-foreground !leading-none">
                                                    Become Speaker
                                                </span>
                                            </div>
                                            <div className="bg-accent-success rounded-md size-xl flex items-center justify-center">
                                                <MicVocal
                                                    size={14}
                                                    className="text-accent-success-foreground"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col px-xs">
                                        <div className="flex flex-row items-center gap-x-sm p-sm cursor-pointer hover:rounded-md hover:bg-gray-100 text-paragraph-sm text-foreground">
                                            System settings
                                        </div>
                                        <div className="flex flex-row items-center gap-x-sm p-sm cursor-pointer hover:rounded-md hover:bg-gray-100 text-paragraph-sm text-foreground">
                                            Help center
                                        </div>
                                        <div className="flex flex-row items-center gap-x-sm p-sm cursor-pointer hover:rounded-md hover:bg-gray-100 text-paragraph-sm text-foreground">
                                            Log out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Button size="lg" variant="outline">
                            Sign in
                        </Button>

                        <Button
                            size="lg"
                            variant="default"
                            className="bg-[#FF5B01] relative"
                        >
                            Register <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
