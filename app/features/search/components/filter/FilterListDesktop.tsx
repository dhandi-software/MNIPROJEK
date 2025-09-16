// TODO REFACTOR THIS COMPONENT
import { ChevronDown, ChevronUp, Calendar, Settings2 } from "lucide-react"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { LabeledCheckbox } from "~/components/ui/checkbox"
import { Tag } from "~/components/ui/tag"
import EventItemDesktop from "~/components/template/event/EventItemDesktop"
// Data
const categories = [
  { label: "Ferrous Metals" },
  { label: "Non-Ferrous Metals" },
  { label: "New Energy" },
]

const locations = [
  { label: "Jakarta, Indonesia" },
  { label: "Bandung, Indonesia" },
  { label: "Surabaya, Indonesia" },
  { label: "Tokyo, Japan" },
  { label: "Guangzhou, China" },
]

const dates = [{ label: "Today" }, { label: "This Week" }, { label: "This Month" }]
const prices = [{ label: "Free" }, { label: "Paid" }]

export default function FilterListDesktop() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedDates, setSelectedDates] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])

  // Toggle expand section
  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
    setSelectedDates([])
    setSelectedPrices([])
  }

  const selectedFilters = [
    ...selectedCategories.map((label) => ({ label, type: "category" })),
    ...selectedLocations.map((label) => ({ label, type: "location" })),
    ...selectedDates.map((label) => ({ label, type: "date" })),
    ...selectedPrices.map((label) => ({ label, type: "price" })),
  ]

  const handleCheckboxChange = (
    checked: boolean,
    label: string,
    selected: string[],
    setter: (val: string[]) => void
  ) => {
    if (checked) {
      setter([...selected, label])
    } else {
      setter(selected.filter((val) => val !== label))
    }
  }

  const renderSection = (
    title: string,
    items: { label: string }[],
    selected: string[],
    setter: (val: string[]) => void,
    extraContent?: React.ReactNode
  ) => {
    const isOpen = openSections.includes(title)
    return (
      <div className="border-b border-border-subtle">
        <Button
          variant="ghost"
          onClick={() => toggleSection(title)}
          className="flex w-full items-center justify-between py-md"
        >
          <span className="text-label text-foreground">{title}</span>
          <div className="flex items-center gap-sm">
            {selected.length > 0 && (
              <span className="bg-primary text-primary-foreground text-xs rounded-full px-sm">
                {selected.length}
              </span>
            )}
            {isOpen ? (
              <ChevronUp className="size-lg" />
            ) : (
              <ChevronDown className="size-lg" />
            )}
          </div>
        </Button>

        {isOpen && (
          <div className="flex flex-col gap-sm pb-md">
            {items.map((item) => (
              <LabeledCheckbox
                key={item.label}
                label={item.label}
                description=""
                checked={selected.includes(item.label)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(!!checked, item.label, selected, setter)
                }
              />
            ))}
            {extraContent && <div className="mt-sm">{extraContent}</div>}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-lg px-4xl border-t border-subtle py-xl">
      {/* ✅ Top Control */}
      <div className="flex flex-col gap-md bg-background">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-sm">
            <Button variant="outline" size="sm">
              <Settings2 className="size-sm mr-xs" />
              Hide filter
            </Button>
          </div>
          <div className="text-muted-foreground text-sm">
            Showing {selectedFilters.length} results
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-sm">
          <span className="text-paragraph-sm">Filter by:</span>
          {selectedFilters.length > 0 && (
            <>
              {selectedFilters.map((filter) => (
                <Tag
                  key={filter.label}
                  label={filter.label}
                  onClose={() => {
                    if (filter.type === "category") {
                      setSelectedCategories(
                        selectedCategories.filter((item) => item !== filter.label)
                      )
                    } else if (filter.type === "location") {
                      setSelectedLocations(
                        selectedLocations.filter((item) => item !== filter.label)
                      )
                    } else if (filter.type === "date") {
                      setSelectedDates(selectedDates.filter((item) => item !== filter.label))
                    } else if (filter.type === "price") {
                      setSelectedPrices(selectedPrices.filter((item) => item !== filter.label))
                    }
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <aside className="grid grid-cols-[17.5rem_1fr] gap-x-xl">
        {/* ✅ Sidebar Filter */}
        <div className="w-full border border-border-subtle rounded-md p-md bg-background h-fit">
          <div className="flex items-center justify-between mb-md">
            <span className="font-semibold text-subheading-h5">Filter by</span>
            <Button variant="link" onClick={clearAllFilters} size="sm">
              Clear all filter
            </Button>
          </div>

          <div className="flex flex-col divide-y divide-border-subtle">
            {renderSection("Categories", categories, selectedCategories, setSelectedCategories)}
            {renderSection(
              "Location",
              locations,
              selectedLocations,
              setSelectedLocations,
              <Button variant="link" size="sm" className="px-0">
                See all locations
              </Button>
            )}
            {renderSection(
              "Date",
              dates,
              selectedDates,
              setSelectedDates,
              <Button variant="outline" size="sm" className="w-full">
                <Calendar className="size-sm mr-xs" />
                Custom Date
              </Button>
            )}
            {renderSection("Price", prices, selectedPrices, setSelectedPrices)}
          </div>
        </div>
        {/* Items, TODO REFACTOR THIS AS A SEPARATE COMPONENT */}
        <div className="grid grid-cols-3 gap-xl">
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="popular now"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            title="Li-ION BATTERY China"
            status="popular now"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
          <EventItemDesktop
            date="19 - 20 Oct 2025"
            price="IDR 5.000.000"
            discountedPrice="IDR 45.000.000"
            title="Li-ION BATTERY China"
            ticketSold="Over 200+ ticket sold"
            status="almost full"
            location="Xiamen, China"
          />
        </div>
      </aside>
    </div>
  )
}
