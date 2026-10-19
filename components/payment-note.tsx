import { Container } from "@/components/container";
import { paymentNote } from "@/lib/site";

export function PaymentNote() {
  return (
    <section className="border-b border-sage/50 bg-page">
      <Container className="py-10 text-center lg:py-12">
        {paymentNote.map((line) => (
          <p key={line} className="leading-relaxed">
            {line}
          </p>
        ))}
      </Container>
    </section>
  );
}
