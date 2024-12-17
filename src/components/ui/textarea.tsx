import { cn } from "@/utils"
import * as React from "react"


const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[90px] text-gray-500 text-sm w-full border-gray-200 rounded transition-colors focus:border-primary/20 border border-x-gray-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
