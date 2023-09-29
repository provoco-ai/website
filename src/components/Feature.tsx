"use client";

import { Container } from "~/components/Container";

export function Feature() {
  return (
    <section
      id="christi"
      className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-sky-500 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Meet Christi
          </h2>
          <p className="mt-6 text-lg tracking-tight text-sky-100">
            The virtual assistant that searches your documents so you don&apos;t
            have to.
          </p>
        </div>
        <div
          title="Eventually, there will be a GIF or a video or something here."
          className="mt-16 grid h-[800px] w-full grid-cols-1 items-center gap-y-2 rounded-xl bg-slate-200 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
        ></div>
      </Container>
    </section>
  );
}
