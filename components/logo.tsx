import Image from "next/image";
import { cn } from "cn";
import { publicPath } from "@/lib/base-path";

export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src={publicPath("/mark.png")}
      alt=""
      width={80}
      height={80}
      className={cn("size-10 shrink-0", className)}
    />
  );
}

export function Wordmark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  const text = tone === "cream" ? "text-cream" : "text-ink";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.55rem] font-medium tracking-[-0.03em] sm:text-[1.7rem]",
            text,
          )}
        >
          Leche 4 Life
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-semibold tracking-[0.22em] uppercase",
            text,
          )}
        >
          Lactation
        </span>
      </span>
    </span>
  );
}
