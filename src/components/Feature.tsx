"use client";

import Image from "next/image";

import { Container } from "~/components/Container";

import demo from "public/christi_demo.gif";

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

        <Image
          className="mt-16 w-full rounded-xl md:mt-20"
          src={demo}
          alt="Christi Demo"
        />
      </Container>
    </section>
  );
}
