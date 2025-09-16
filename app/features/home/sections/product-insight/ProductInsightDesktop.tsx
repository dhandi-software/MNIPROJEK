import { Rotate3D, Lock, LayoutDashboard, Crown } from "lucide-react";
function Item({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="flex flex-col p-lg rounded-xl bg-[#4F270D]">
            <div className="bg-white/10 rounded-md p-sm w-fit text-white">
                {icon}
            </div>
            <h1 className="text-heading-h4 text-brand-primary-foreground mt-md">
                {title}
            </h1>
            <p className="text-paragraph text-brand-primary-foreground">
                {description}
            </p>
        </div>
    );
}

export function ProductInsightDesktop() {
    return (
        <section className="w-full h-[18.75rem] bg-[#3F1F0A] py-[3.625rem] px-4xl grid grid-cols-4 gap-x-xl">
            <Item
                title="Expand your network"
                description="Connect with peers and experts worldwide to shape the future of the industry."
                icon={<Rotate3D size={24} />}
            />
            <Item
                title="Secure and trusted"
                description="Every transaction is protected with reliable payment systems and transparent event policies."
                icon={<Lock size={24} />}
            />
            <Item
                title="Everything all in one place"
                description="Seamless event management for attendees, organizers, and speakers — all in one platform."
                icon={<LayoutDashboard size={24} />}
            />
            <Item
                title="Tailored event experience"
                description="Exclusive access, VIP packages and networking opportunities designed just for you."
                icon={<Crown size={24} />}
            />
        </section>
    );
}
