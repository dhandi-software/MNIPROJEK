import { Outlet, useRouteLoaderData } from "react-router";
import type { ContextType } from "~/root";
import Header from "~/components/template/header";
import Footer from "~/components/template/footer";


export default function LandingLayout() {
  const { isMobile } = useRouteLoaderData("root");
  return (
    <>
      <Header isMobile={isMobile} />
      <main>
        <Outlet context={{ isMobile: isMobile } satisfies ContextType} />
      </main>
      <Footer isMobile={isMobile} />
    </>
  );
}
