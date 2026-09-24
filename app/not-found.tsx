import { Container } from "@/components/container";
import { Cta } from "@/components/cta";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <Container className="py-24 lg:py-32">
        <p className="eyebrow">404</p>
        <h1 className="display-lg mt-4 max-w-2xl">That page is not on this site.</h1>
        <p className="lede mt-5 max-w-xl">
          The link may be old. You can go back to the homepage or send Amanda a
          message.
        </p>
        <div className="mt-8">
          <Cta href="/">Back to home</Cta>
        </div>
      </Container>
    </section>
  );
}
