/**
 * TextField Component
 *
 * A reusable input field component with optional label, error state, and variant layouts.
 * Styled with TailwindCSS, supports horizontal and vertical label alignment, and built-in
 * error display with icon.
 *
 * Components:
 * - TextField: The main component containing a label, input, and optional error message.
 *
 * Props:
 * - variant: Layout style for the label and input.
 *    - "vertical" → Label above the input.
 *    - "horizontal"   → Label aligned to the left of the input.
 * - type: Input type (e.g., "text", "password", "email", etc.).
 * - placeholder: Placeholder text for the input.
 * - size: Size of the label and input ("lg" or "sm").
 * - disabled: Disables the input and label when `true`.
 * - error: Shows the error state (border color changes to `border-brand-destructive`).
 * - errorMessage: Error message text displayed below the input (when `error` is `true`).
 * - label: Text for the label.
 * - onChange: Callback when the input value changes.
 *
 * Example usage:
 * ```tsx
 * <TextField
 *   variant="horizontal"
 *   type="text"
 *   placeholder="Enter your name"
 *   size="lg"
 *   disabled={false}
 *   error={true}
 *   errorMessage="This field is required"
 *   label="Name"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * ```
 */
import { useId } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "~/lib/utils";

export type TextFieldProps = {
  variant?: "horizontal" | "vertical";
  size?: "lg" | "sm";
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

export function TextField({
  variant = "horizontal",
  type = "text",
  placeholder = "Placeholder",
  size,
  disabled = false,
  error = false,
  errorMessage = "",
  label,
  id,
  value,
  onChange,
  className,
  inputClassName,
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isVertical = variant === "vertical";

  return (
    <div
      className={cn(
        isVertical
          ? "flex flex-col gap-sm w-full"
          : "flex items-start gap-lg w-full",
        className
      )}
    >
      {label && (
        <Label
          htmlFor={inputId}
          size={size}
          disabled={disabled}
          className={cn(
            "shrink-0", // label jangan melar
            variant === "horizontal" && size === "sm" && "pt-2.5",
            variant === "horizontal" && size === "lg" && "pt-3.5"
          )}
        >
          {label}
        </Label>
      )}

      <div
        className={cn(
          "flex flex-col gap-1",
          isVertical ? "w-full" : "flex-1 min-w-0"
        )}
      >
        <Input
          id={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          size={size}
          onChange={onChange}
          className={cn(
            "w-full",
            error && "border-brand-destructive",
            inputClassName
          )}
        />

        {error && errorMessage && (
          <div className="flex items-center gap-lg text-brand-destructive text-sm font-normal">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
