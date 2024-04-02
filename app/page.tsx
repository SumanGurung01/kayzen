import Feature from "@/components/screen/Feature";
import Hero from "@/components/screen/Hero";
import Integration from "@/components/screen/Integration";
import Personalize from "@/components/screen/Personalize";
import Pricing from "@/components/screen/Pricing";
import Solution from "@/components/screen/Solution";
import Testimonials from "@/components/screen/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Personalize />
      <Solution />
      <Integration />
      <Pricing />
      <Testimonials />
    </>
  );
}
