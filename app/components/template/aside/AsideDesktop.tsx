import { Image } from "~/components/ui/image";

export default function AsideDesktop() {
    return (
        <aside className="h-full w-full relative">
            <Image
                className="absolute z-[1] h-full w-full object-center"
                src="https://picsum.photos/seed/picsum/530/1024"
                loading="lazy"
                alt="aside-image"
            />
            <div className="absolute z-[2] top-0 mx-[2rem] mt-[2rem] flex flex-row gap-x-lg items-center">
                <img
                    className="w-[2.5rem] h-[2.5rem]"
                    src="/icons/ic_logo.svg"
                    loading="lazy"
                    alt="logo"
                />
                <span className="text-[2rem] font-[850] text-foreground">
                    MDP
                </span>
            </div>
            <section className="absolute bottom-0 p-xl z-[99] mx-[2rem] mb-[2rem] rounded-lg bg-[#46464699] text-white backdrop-blur-[4px]">
                <h1 className="text-heading-h3 mb-sm">
                    Not just ticketing platform, we provide experience.
                </h1>
                <p className="text-paragraph">
                    From exploration to live event access, we go beyond
                    transactions. Every click brings you closer to richer, more
                    connected mining experiences.
                </p>
            </section>
        </aside>
    );
}
