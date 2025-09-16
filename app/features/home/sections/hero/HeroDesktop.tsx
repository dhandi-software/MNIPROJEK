import { Category } from "~/components/ui/category";
import { CategoryChip } from "~/components/ui/category-chip";

export function HeroDesktop() {
    return (
        <section className="flex flex-col h-[37.5rem] w-full relative">
            <img
                src="/images/HeroImage.svg"
                alt="Conference Hero"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
                loading="lazy"
            />

            <div className="absolute inset-0 grid grid-cols-[1fr_27.25rem] z-10 px-[5rem]">
                <div className="flex flex-col mt-[5.188rem]">
                    <h1 className="text-5xl leading-[3.375rem] font-bold text-brand-primary-foreground line-clamp-3">
                        Discover the most influential conference in Mining,
                        Energy, & Oil.
                    </h1>
                    <CategoryChip text="Pick popular topics" />
                    <div className="w-fit flex flex-row border-t border-b border-white/40 -mt-3.5 pt-3xl pb-xl gap-x-2xl">
                        {/* TODO change when integration API should be looping from array */}
                        <Category
                            src="/icons/ic_mining.svg"
                            alt="Category"
                            text="Mining Exploration"
                        />
                        <Category
                            src="/icons/ic_technology.svg"
                            alt="Category"
                            text="Technology Innovation"
                        />
                        <Category
                            src="/icons/ic_energy.svg"
                            alt="Category"
                            text="New Energy"
                        />
                        <Category
                            src="/icons/ic_medical.svg"
                            alt="Category"
                            text="Health & Safety"
                        />
                        <Category
                            src="/icons/ic_green_globe.svg"
                            alt="Category"
                            text="Sustainability Environtment"
                        />
                    </div>
                </div>

                <div className="flex items-end justify-end">
                    <h1 className="text-white text-heading-4 font-regular rounded-md text-end pb-[5rem]">
                        A live experience that brings together professional, to
                        connect and build dreams together.
                    </h1>
                </div>
            </div>
        </section>
    );
}
