import { cn } from "@/utils";
import * as React from "react"


interface IErrorLabel {
  message?: string;
  type?: string;
}

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: IErrorLabel;
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full text-gray-500 text-sm rounded border focus:border-primary/20 border-gray-200  bg-transparent px-3 h-10  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
