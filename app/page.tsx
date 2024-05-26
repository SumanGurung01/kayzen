import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
      <div className="m-auto max-w-[1400px] px-4 text-zinc-800 md:px-6 lg:px-10">
        <Navbar />
        <Hero />
        <Feature />
        <Personalize />
        <Solution />
        <Integration />
        <Pricing />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
