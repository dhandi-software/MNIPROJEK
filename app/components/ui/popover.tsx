/**
 * Popover Component
 *
 * A custom wrapper around Radix UI's `Popover` primitives (`Root`, `Trigger`, `Content`, `Anchor`, `Portal`)
 * with a styled `Button` as the trigger by default.
 *
 * ## Example Usage:
 *
 * ```tsx
 * import { Popover, PopoverTrigger, PopoverContent } from "~/components/ui/popover"
 * import { Plus } from "lucide-react"
 *
 * export default function Example() {
 *   return (
 *     <Popover>
 *       <PopoverTrigger variant="outline" size="sm">
 *         <Plus className="h-4 w-4 mr-2" />
 *         Buy Ticket
 *       </PopoverTrigger>
 *       <PopoverContent>
 *         <div className="flex flex-col space-y-2">
 *           <span>Standard Ticket - $20</span>
 *           <span>VIP Ticket - $50</span>
 *         </div>
 *       </PopoverContent>
 *     </Popover>
 *   )
 * }
 * ```
 *
 * ## Props:
 *   - `Popover` → wrapper around `Root`, controls the popover state.
 *   - `PopoverTrigger` → styled button wrapper around Radix `Trigger`.
 *   - `variant` (default: `"outline"`) → style variant from your Button component.
 *   - `size` (default: `"lg"`) → size variant from your Button component.
 *   - `children` → you can pass icons, text, or both.
 * - `PopoverContent` → wrapper around Radix `Content`, includes styling and animation.
 *   - `align` (default: `"center"`) → content alignment relative to the trigger.
 *   - `sideOffset` (default: `4`) → offset distance between trigger and content.
 * - `PopoverAnchor` → optional anchor if you want to position content relative to a different element.
 *
 * ## Notes:
 * - By default, `PopoverTrigger` uses your `Button` component with `variant="outline"` and `size="lg"`.
 * - You can pass any content inside `PopoverContent`, such as forms, lists, or menus.
 * - Works seamlessly with Radix Popover props if you need more customization.
 */

import {
  Root,
  Trigger,
  Content,
  Anchor,
  Portal,
} from "@radix-ui/react-popover"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"

function Popover({
  ...props
}: React.ComponentProps<typeof Root>) {
  return <Root data-slot="popover" {...props} />
}


function PopoverTrigger({
  children,
  variant = "outline",
  size = "lg",
  ...props
}: React.ComponentProps<typeof Trigger> & {
  variant?: "default" | "secondary" | "destructive" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}) {
  return (
    <Trigger asChild data-slot="popover-trigger">
      <Button variant={variant} size={size} {...props}>
        {children ?? "Buy Ticket"}
      </Button>
    </Trigger>
  )
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-popover-content-transform-origin) rounded-md border p-lg shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof Anchor>) {
  return <Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
