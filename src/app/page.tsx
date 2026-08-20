import { Hero } from "../components/home/hero";
import { Problem } from "../components/home/problem";
import { Solution } from "../components/home/solution";
import { HowItWorks } from "../components/home/how-it-works";
import { Features } from "../components/home/features";
import { WhoItsFor } from "../components/home/who-its-for";
import { Faq } from "../components/home/faq";
import { BottomCta } from "../components/home/bottom-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Faq />
      <BottomCta />
    </>
  );
}
