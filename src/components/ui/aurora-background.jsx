import React from "react";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen w-full items-center justify-center transition-bg",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
            "bg-[repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]",
            "bg-[length:300%_200%] animate-aurora blur-[10px] opacity-50 dark:invert-0 invert"
          )}
        ></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};