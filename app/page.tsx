import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Atelier from "@/src/components/Atelier";
import Newsletter from "@/src/components/Newsletter";
import Challenge from "@/src/components/Challenge";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Atelier />
      <Challenge />
      <Newsletter />
    </>
  );
}