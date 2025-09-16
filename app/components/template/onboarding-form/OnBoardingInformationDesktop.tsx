import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import {
    ArrowLeft,
    MapPin,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    MousePointer2,
} from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "~/components/ui/popover";
import { TextField } from "~/components/ui/TextField";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";
import { cn } from "~/lib/utils";
import { ButtonAction } from "~/components/ui/button-action";

type OnboardingDesktopProps = {
    onBack: () => void;
    expertises: string[];
    locations: string[];
};

export default function OnBoardingInformationDesktop({
    onBack,
    expertises,
    locations,
}: OnboardingDesktopProps) {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedExpertise, setSelectedExpertise] = useState<string | null>(
        null,
    );
    const [selectedLocation, setSelectedLocation] = useState<string | null>(
        null,
    );

    return (
        <div className="flex flex-col">
            <div className="flex flex-col pb-lg gap-sm mb-lg">
                <Button
                    className="!text-foreground justify-start !p-0"
                    variant="link"
                    size="sm"
                    onClick={onBack}
                >
                    <ArrowLeft className="size-3.5" />
                    <span className="text-label-sm ">Back</span>
                </Button>
                <h1 className="text-heading-h3">
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
                size="lg"
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
                size="lg"
                disabled={false}
                error={false}
                errorMessage="Phone number is required"
                label="Phone number"
                onChange={(e) => console.log(e.target.value)}
                className="mb-lg"
            />

            {/* Dropdown */}
            <DropdownMenu
                open={open}
                onOpenChange={setOpen}
                className="mb-lg"
                label="Work of field"
                size="lg"
            >
                <DropdownMenuTrigger className="flex items-center justify-between w-full !text-muted-foreground text-paragraph border border-border-subtle rounded-md px-lg py-md gap-lg">
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
                        <ChevronUp className="size-5" />
                    ) : (
                        <ChevronDown className="size-5" />
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {expertises.map((field) => (
                        <DropdownMenuItem
                            key={field}
                            onClick={() => setSelectedExpertise(field)}
                        >
                            {field}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

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
                    size="lg"
                    disabled={false}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

            {/* create line */}
            <div className="border-b border-border-sublte my-2xl" />

            {/* Popover */}
            <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild>
                    <Button
                        ref={triggerRef}
                        variant="outline"
                        role="combobox"
                        aria-expanded={openLocation}
                        className="flex w-full h-auto border border-border-subtle rounded-md px-md py-sm text-left mb-3xl text-foreground"
                    >
                        <MapPin className="size-xl" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-label-lg">
                                        {selectedLocation || "Choose Location"}
                                    </span>
                                    {!selectedLocation && (
                                        <span className="text-desc text-muted-foreground">
                                            Personalized event based on your
                                            nearby location
                                        </span>
                                    )}
                                </div>
                                <ChevronRight className="size-5 text-muted-foreground" />
                            </div>
                        </div>
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
                            placeholder="Type your City or Country"
                            className="h-9"
                        />
                        <CommandList>
                            <CommandEmpty>No Location Found</CommandEmpty>
                            <CommandGroup>
                                {locations.map((location) => (
                                    <CommandItem
                                        key={location}
                                        value={location}
                                        onSelect={(currentValue) => {
                                            setSelectedLocation(currentValue);
                                            setOpenLocation(false);
                                        }}
                                    >
                                        {location}
                                    </CommandItem>
                                ))}
                                <Button
                                    variant="ghost"
                                    className="flex m-auto gap-sm px-sm py-sm text-label text-secondary-foreground"
                                    onClick={() =>
                                        setSelectedLocation(
                                            "Use my current location",
                                        )
                                    }
                                >
                                    <MousePointer2 className="h-lg w-lg rotate-90" />
                                    Use my current location
                                </Button>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

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
