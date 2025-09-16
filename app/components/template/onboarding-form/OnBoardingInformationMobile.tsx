import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
    ArrowLeft,
    MapPin,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    MousePointer2,
    Search,
} from "lucide-react";
import { TextField } from "~/components/ui/TextField";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "~/components/ui/drawer";
import { cn } from "~/lib/utils";
import { Label } from "~/components/ui/label";
import { ButtonAction } from "~/components/ui/button-action";
import { Input } from "~/components/ui/input";

type OnboardingDesktopProps = {
    onBack: () => void;
    expertises: string[];
    locations: string[];
};

export default function OnBoardingInformationMobile({
    onBack,
    expertises,
    locations,
}: OnboardingDesktopProps) {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const [selectedExpertise, setSelectedExpertise] = useState<string | null>(
        null,
    );
    const [selectedLocation, setSelectedLocation] = useState<string | null>(
        null,
    );
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFields = expertises.filter((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="flex flex-col">
            <div className="pb-lg">
                <Button
                    className="!text-foreground justify-start !p-0"
                    variant="link"
                    size="sm"
                    onClick={onBack}
                >
                    <ArrowLeft className="size-3.5" />
                    <span className="text-label-sm ">Back</span>
                </Button>
                <h1 className="text-heading-h4">
                    Let’s get to know each other
                </h1>
                <p className="text-paragraph text-muted-foreground">
                    Fill in the information below or you can skip for later
                </p>
            </div>

            <TextField
                variant="vertical"
                type="text"
                placeholder="Input your name"
                disabled={false}
                error={false}
                errorMessage="name is required"
                label="Full name"
                onChange={(e) => console.log(e.target.value)}
                className="mb-lg"
            />

            <TextField
                variant="vertical"
                type="phone"
                placeholder="Input your phone number"
                disabled={false}
                error={false}
                errorMessage="Phone number is required"
                label="Phone number"
                onChange={(e) => console.log(e.target.value)}
                className="mb-lg"
            />

            {/* Drawer */}
            <Drawer label="Work of field" open={open} onOpenChange={setOpen}>
                <DrawerTrigger className="flex items-center justify-between w-full text-paragraph border border-border-subtle rounded-md px-md py-sm mb-lg">
                    <span
                        className={cn(
                            "text-paragraph",
                            selectedExpertise
                                ? "text-foreground"
                                : "text-muted-foreground",
                        )}
                    >
                        {selectedExpertise || "Choose your expertise"}
                    </span>
                    {open ? (
                        <ChevronUp className="size-5 text-muted-foreground" />
                    ) : (
                        <ChevronDown className="size-5 text-muted-foreground" />
                    )}
                </DrawerTrigger>

                <DrawerContent className="flex flex-col h-[60vh] rounded-t-2xl">
                    {/* Header */}
                    <DrawerHeader>
                        <Button
                            className="!text-foreground justify-start !p-0"
                            variant="link"
                            size="sm"
                            onClick={() => setOpen(false)}
                        >
                            <ArrowLeft className="size-3.5" />
                            Back
                        </Button>
                        <DrawerTitle className="text-left text-heading-h4 text-foreground">
                            Choose your expertise
                        </DrawerTitle>

                        {/* Search Input with Icon */}
                        <div className="mt-md relative">
                            <Search className="absolute left-md top-1/2 -translate-y-1/2 text-muted-foreground size-lg" />
                            <Input
                                type="text"
                                placeholder="Search expertise..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-md border border-border-subtle rounded-md text-paragraph focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>
                    </DrawerHeader>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto px-lg">
                        {filteredFields.length > 0 ? (
                            filteredFields.map((field) => (
                                <Label
                                    key={field}
                                    onClick={() => {
                                        setSelectedExpertise(field);
                                        setOpen(false);
                                    }}
                                    className="block w-full text-left mb-md text-paragraph-sm text-foreground cursor-pointer hover:text-brand-primary"
                                >
                                    {field}
                                </Label>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-center mt-xl">
                                No expertise found.
                            </p>
                        )}
                    </div>
                </DrawerContent>
            </Drawer>

            <div>
                <label
                    className="block text-foreground text-label text-md"
                    htmlFor="organization"
                >
                    Organization{" "}
                    <span className="text-paragraph text-muted-foreground">
                        (optional)
                    </span>
                </label>
                <TextField
                    id="organization"
                    variant="vertical"
                    type="text"
                    placeholder="Your company or organization"
                    disabled={false}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

            <div className="border-b border-border-subtle my-lg" />

            <Drawer open={openLocation} onOpenChange={setOpenLocation}>
                <DrawerTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openLocation}
                        className="flex w-full h-auto border border-border-subtle rounded-md px-md py-sm text-left mb-3xl text-foreground items-center gap-lg justify-between"
                    >
                        <MapPin className="size-5" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-label">
                                        {selectedLocation || "Choose Location"}
                                    </span>
                                    {!selectedLocation && (
                                        <span className="text-desc-sm text-muted-foreground">
                                            Personalized event based on your
                                            nearby location
                                        </span>
                                    )}
                                </div>
                                <ChevronRight className="size-5 text-muted-foreground" />
                            </div>
                        </div>
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="flex flex-col h-[70vh] rounded-t-2xl">
                    {/* Header */}
                    <DrawerHeader>
                        <Button
                            className="!text-foreground justify-start !p-0"
                            variant="link"
                            size="sm"
                            onClick={() => setOpenLocation(false)}
                        >
                            <ArrowLeft className="size-3.5" />
                            Back
                        </Button>
                        <DrawerTitle className="text-left text-heading-h4 text-foreground">
                            Add Location
                        </DrawerTitle>
                    </DrawerHeader>

                    {/* Search Input */}
                    <div className="px-lg">
                        <div className="relative mb-lg">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-lg" />
                            <Input
                                type="text"
                                placeholder="Type your City or Country"
                                className="pl-10 h-10 border border-border-subtle rounded-md"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>

                        {/* Location List */}
                        <div className="flex-1 overflow-y-auto">
                            <span className="text-label-sm text-muted-foreground">
                                Suggested location
                            </span>
                            {locations.filter((location) =>
                                location
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase()),
                            ).length > 0 ? (
                                locations
                                    .filter((location) =>
                                        location
                                            .toLowerCase()
                                            .includes(
                                                searchValue.toLowerCase(),
                                            ),
                                    )
                                    .map((location) => (
                                        <Label
                                            key={location}
                                            onClick={() => {
                                                setSelectedLocation(location);
                                                setOpenLocation(false);
                                            }}
                                            className="p-sm text-paragraph-sm gap-2.5"
                                        >
                                            {location}
                                        </Label>
                                    ))
                            ) : (
                                <div className="text-center text-muted-foreground py-lg">
                                    No Location Found
                                </div>
                            )}
                        </div>

                        {/* Use Current Location Button */}
                        <div className="mt-lg flex justify-center">
                            <Button
                                variant="ghost"
                                size="md"
                                className="flex gap-sm px-sm py-sm text-label text-secondary-foreground"
                                onClick={() => {
                                    setSelectedLocation(
                                        "Use my current location",
                                    );
                                    setOpenLocation(false);
                                }}
                            >
                                <MousePointer2 className="size-lg rotate-90" />
                                Use my current location
                            </Button>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>

            <ButtonAction
                className="text-label"
                variant="default"
                size="lg"
                loading={loading}
                onClick={() => setLoading(true)}
            >
                Continue
            </ButtonAction>
            <Button
                className="text-label !text-foreground"
                variant="link"
                size="md"
            >
                Skip for now
            </Button>
        </div>
    );
}
