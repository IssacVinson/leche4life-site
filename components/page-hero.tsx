import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
}) {
  return (
    <section className="border-b border-sage/50 bg-cream">
      <Container className="py-16 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-lg mt-4 max-w-4xl">{title}</h1>
        <p className="lede mt-5 max-w-2xl">{lede}</p>
      </Container>
    </section>
  );
}
