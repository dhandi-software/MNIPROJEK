import { Button } from "~/components/ui/button";

export function InfoSignUpDesktop() {
    return (
        <section className="flex flex-col bg-[#3F1F0A] py-3xl px-[4.969rem] items-center">
            <h1 className="mb-lg text-heading-h1 text-white">
                Ready to get started?
            </h1>
            <span className="mb-2xl text-subheading-h4 !font-normal text-white">
                Gain access to a wealth of knowledge from industry experts and
                speakers by registering today!
            </span>
            <Button className="bg-[#FF5B01]" size={"lg"}>
                Register Now
            </Button>
        </section>
    );
}
