import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

const ctaClass =
  "h-12 rounded-full px-6 text-base font-medium hover:bg-primary hover:brightness-[0.97]";

export function Cta({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: string;
  className?: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <Button
        className={cn(ctaClass, className)}
        render={
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${children} (opens in a new tab)`}
          />
        }
      >
        {children}
      </Button>
    );
  }

  return (
    <Button className={cn(ctaClass, className)} render={<Link href={href} />}>
      {children}
    </Button>
  );
}
