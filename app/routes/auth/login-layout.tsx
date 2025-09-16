import { Outlet, useRouteLoaderData } from "react-router";
import Aside from "~/components/template/aside/Aside";
import Header from "~/components/template/auth-header/index";
import type { ContextType } from "~/root";
import { cn } from "~/lib/utils";
export default function LoginLayout() {
    const { isMobile } = useRouteLoaderData("root");
    return (
        <>
            <Header isMobile={isMobile} />
            <div className="grid grid-cols-[1fr_33.125rem] h-screen">
                <main>
                    <div className="flex flex-col h-full">
                        <section
                            className={cn(
                                "flex flex-col bg-white rounded-md",
                                isMobile
                                    ? "w-[22.5rem] py-xl px-lg"
                                    : "max-w-[32.375rem] p-3xl m-auto border border-border-subtle",
                            )}
                        >
                            <Outlet
                                context={
                                    { isMobile: isMobile } satisfies ContextType
                                }
                            />
                        </section>
                    </div>
                </main>
                <Aside isMobile={isMobile} />
            </div>
        </>
    );
}
