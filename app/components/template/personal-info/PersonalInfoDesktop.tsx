export function PersonalInfoDesktop({
    src,
    title,
    desc,
}: {
    src: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex flex-col w-full">
            <img
                className="w-full h-[9.75rem] rounded-lg object-cover"
                loading="lazy"
                src={src}
                alt={title}
            />
            <span className="mt-lg text-label-lg text-foreground">{title}</span>
            <span className="text-desc text-muted-foreground mt-xs">
                {desc}
            </span>
        </div>
    );
}
