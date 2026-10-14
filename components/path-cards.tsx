import Image from "next/image";
import { Cta } from "@/components/cta";
import { publicPath } from "@/lib/base-path";

const paths = [
  {
    href: "/expecting/",
    label: "I’m Expecting",
    title: "Still expecting",
    body: "Plan ahead, so the first days of feeding feel familiar instead of frantic.",
    image: {
      src: "/images/home-expecting.jpg",
      alt: "A pregnant woman in a cream sweater holding her belly.",
    },
  },
  {
    href: "/baby-is-here/",
    label: "The Baby Is Here",
    title: "Your baby is here",
    body: "Hands-on help at home for latch, pain, weight, and supply — starting now.",
    image: {
      src: "/images/home-baby-is-here.jpg",
      alt: "A mother leaning in nose to nose with her baby on a bed.",
    },
  },
] as const;

/** Two side-by-side doors: one for the expecting mom, one for the mom whose baby is here. */
export function PathCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {paths.map((path) => (
        <article
          key={path.href}
          className="flex flex-col overflow-hidden rounded-3xl border border-sage/70 bg-white"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={publicPath(path.image.src)}
              alt={path.image.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-7">
            <Heading className="text-3xl sm:text-4xl">{path.title}</Heading>
            <p className="mt-3 flex-1 leading-relaxed">{path.body}</p>
            <div className="mt-6">
              <Cta href={path.href} className="font-semibold">
                {path.label}
              </Cta>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
