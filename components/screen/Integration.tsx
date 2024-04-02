import { CircleCheck } from "lucide-react";
import React from "react";
import { features } from "@/utlis/constant";
import Image from "next/image";
import Tools from "@/assets/integration-assets/integration.png";
import Blob from "../ui/Blob";

function Integration() {
  return (
    <main id="integrations" className="center relative mt-2 flex-col pt-8">
      {/* Integration heading */}
      <h1 className="w-full max-w-xl text-center text-3xl font-bold md:text-4xl">
        Direct <span className="gradient-text">integrations</span> with your
        favorite tools
      </h1>

      {/* Intergration features */}
      <div
        id="hero-feature"
        className="center my-10 text-xs font-semibold md:text-sm lg:justify-start"
      >
        {/* map each feature and return feature */}
        {features.map((feature) => (
          <div className="center mr-4 items-start gap-1 md:mr-8" key={feature}>
            <CircleCheck size={16} />
            <p>{feature}</p>
          </div>
        ))}
      </div>

      {/* Integration buttons */}
      <div className="flex gap-10">
        <button className="active:bg-gradient-active bg-gradient w-40 rounded-md py-2 text-white">
          Start a free trial
        </button>

        <button className="w-40 rounded-md border-2 border-pink-500 bg-white py-2">
          Book a demo
        </button>
      </div>

      <Image
        src={Tools}
        alt="integration image"
        className="mt-20 w-full max-w-[600px]"
      />

      {/* floating gradient blobs */}
      <Blob className="absolute left-[0px] top-[300px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />

      <Blob className="absolute right-[0px] top-[0px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-3xl lg:block" />
    </main>
  );
}

export default Integration;
