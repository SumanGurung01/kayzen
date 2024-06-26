import Image from "next/image";
import React from "react";
import { CircleCheck } from "lucide-react";
import Blob from "../ui/Blob";

import HeroGif from "@/assets/hero-assets/hero.gif";
import Company from "@/assets/trusted-company-assets/smart-it-logo.png";

import { features } from "@/utlis/constant";
import Link from "next/link";

function Hero() {
  return (
    <>
      <main className="lg relative mt-20 justify-center lg:flex">
        {/* div containing text*/}
        <div id="hero-text" className="lg:w-[40%]">
          {/* hero text */}
          <h1 className="my-10 text-center text-3xl font-semibold md:text-5xl lg:text-start lg:text-7xl">
            <span className="underline decoration-lime-600">Boost Sales</span> &{" "}
            <span className="underline decoration-lime-600">Satisfaction</span>
          </h1>
          <p className="text-center text-xl font-semibold md:text-2xl  lg:my-10 lg:text-start lg:text-3xl">
            Your All-in-One AI Solution for<br></br>
            <span className="gradient-text font-bold">Customer Support</span>
          </p>

          {/* hero-features */}
          <div
            id="hero-feature"
            className="center my-10 text-xs font-semibold md:text-sm lg:justify-start"
          >
            {/* map each feature and return feature */}
            {features.map((feature) => (
              <div
                className="center mr-4 items-start gap-1 md:mr-8"
                key={feature}
              >
                <CircleCheck size={16} />
                <p>{feature}</p>
              </div>
            ))}
          </div>

          {/* hero buttons */}
          <div className="center gap-10 lg:ml-20 lg:justify-start">
            <Link
              href="/dashboard"
              className="active:bg-gradient-active bg-gradient center w-40 rounded-xl py-2 text-white"
            >
              Start a free trial
            </Link>

            <button className="w-40 rounded-xl border-2 border-pink-500 bg-white py-2">
              Book a free demo
            </button>
          </div>
        </div>

        {/* div containing gif*/}
        <div id="hero-gif" className="center lg:mt-[-100px] lg:w-[40%]">
          <Image src={HeroGif} alt="hero gif" className="w-full max-w-xl" />
        </div>

        {/* floating gradient blobs */}
        <Blob className="absolute left-[-150px] top-[300px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />

        <Blob className="absolute right-[150px] top-[50px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-3xl lg:block" />
      </main>

      {/* div containing trusted companies*/}
      <section id="hero-trusted-companies" className="center mt-40 flex-col">
        <h1 className="text-xl font-semibold">
          Trusted by these leading companies
        </h1>
        <Image src={Company} alt="company logo" className="m-10 w-40" />
      </section>
    </>
  );
}

export default Hero;
