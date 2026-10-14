import Image from "next/image";
import { Container } from "@/components/container";
import { publicPath } from "@/lib/base-path";

export function ImageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  image: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-sage/50 bg-cream">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-lg mt-4">{title}</h1>
          <p className="lede mt-5 max-w-xl">{lede}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:col-span-6">
          <Image
            src={publicPath(image.src)}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
