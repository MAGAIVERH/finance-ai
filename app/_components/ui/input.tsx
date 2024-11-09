import * as React from "react";
import { cn } from "@/app/_lib/utils";

// Define um alias para o tipo das props do componente Input.
type InputProps = React.ComponentProps<"input">; // <--- Adicionei essa linha

// O componente Input utiliza o tipo InputProps.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

// Exporta o componente Input.
export { Input };

// Exporta o tipo InputProps usando `export type`.
export type { InputProps }; // <--- Corrigi essa linha
