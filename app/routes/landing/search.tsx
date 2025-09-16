import FilterList from "~/features/search/components/filter";
import SubHeader from "~/features/search/components/sub-header";

export default function Search() {
    return (
        <main className="flex flex-col">
            <SubHeader
                type="default"
                url={[
                    { label: "Home", href: "/" },
                    { label: "Discover events", href: "/" },
                    { label: "Search result" },
                ]}
            />
            <FilterList />
        </main>
    );
}
