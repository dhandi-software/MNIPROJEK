import { useOutletContext } from "react-router"
import type { ContextType } from "~/root"
import FilterListMobile from "~/features/search/components/filter/FilterListMobile"
import FilterListDesktop from "~/features/search/components/filter/FilterListDesktop"

export default function FilterList() {
    const { isMobile } = useOutletContext<ContextType>()
    return isMobile ? <FilterListMobile /> : <FilterListDesktop />
}