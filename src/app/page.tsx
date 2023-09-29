import { CallToAction } from "~/components/CallToAction";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Feature } from "~/components/Feature";
import { AboutUs } from "~/components/AboutUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <AboutUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
