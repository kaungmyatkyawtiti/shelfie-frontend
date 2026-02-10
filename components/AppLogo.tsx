import { cn } from "@/lib/utils";
import { Store } from "lucide-react";
import Link from "next/link";

interface AppLogoProps {
  size?: "sm" | "md" | "lg";
};

const variants = {
  sm: {
    box: "size-8",
    icon: 20,
    title: "text-lg",
    subtitle: "text-xs",
  },
  md: {
    box: "size-10",
    icon: 28,
    title: "text-2xl",
    subtitle: "text-sm",
  },
  lg: {
    box: "size-14",
    icon: 36,
    title: "text-4xl",
    subtitle: "text-base",
  },
};

export default function AppLogo({ size = "md" }: AppLogoProps) {
  const current = variants[size];

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "bg-brand text-white flex items-center justify-center rounded-md",
          current.box
        )}
      >
        <Store size={current.icon} />
      </div>
      <div className="flex flex-col gap-px">
        <h2 className={cn("font-semibold", current.title)}>Shelfie</h2>
        <p className={cn("text-foreground/85", current.subtitle)}>POS System</p>
      </div>
    </div>
  )
}

