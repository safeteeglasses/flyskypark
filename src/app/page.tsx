import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import HomeVideo from "@/components/HomeVideo";
import MetarWidget from "@/components/MetarWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeVideo />
      <Services />
      <Careers />
      <MetarWidget />
    </>
  );
}
