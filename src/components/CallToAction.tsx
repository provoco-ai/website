import { Button } from "~/components/Button";
import { Container } from "~/components/Container";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-sky-500 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Request a demo
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-100">
            Let your documentation tell you what you need to know.
          </p>
          <Button href="mailto:demo@provoco.ai" color="white" className="mt-10">
            Contact us today
          </Button>
        </div>
      </Container>
    </section>
  );
}
