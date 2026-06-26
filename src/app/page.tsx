import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SneakPeek } from "@/components/sections/SneakPeek";
import { Services } from "@/components/sections/Services";
import { Fleet } from "@/components/sections/Fleet";
import { Coverage } from "@/components/sections/Coverage";
import { Testimonial } from "@/components/sections/Testimonial";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SneakPeek />
        <Services />
        <Fleet />
        <Coverage />
        <Testimonial />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
