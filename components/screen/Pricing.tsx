import React from "react";
import { pricings } from "@/utlis/constant";
import { Check, Sparkles } from "lucide-react";
import Blob from "../ui/Blob";

function Pricing() {
  return (
    <main id="pricing" className="center relative mt-28 flex-col pt-12">
      {/* Main heading */}
      <h1 className="mb-20 w-full max-w-xl text-center text-3xl font-bold md:text-4xl">
        Pays for itself in <span className="gradient-text">saved</span> support
        time
      </h1>

      {/* Container for Pricing Card */}
      <div
        id="pricing-card-container"
        className="flex flex-col gap-10 lg:flex-row"
      >
        {/* map through each pricing and return pricing card*/}
        {pricings.map((pricing) => {
          const { catagory, price, type, features } = pricing;
          return (
            <PricingCard
              catagory={catagory}
              price={price}
              type={type}
              features={features}
              key={type}
            />
          );
        })}
      </div>

      {/* floating gradient blobs */}
      <Blob className="absolute left-[25%] top-[100px] z-[-10] hidden h-[600px] w-[600px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />
    </main>
  );
}

interface PricingCardProps {
  catagory: string;
  price: number;
  type: string;
  features: string[];
}

function PricingCard({ catagory, price, type, features }: PricingCardProps) {
  return (
    <section
      id="pricing-card"
      className="w-full rounded-lg border-[1px] border-zinc-300 bg-white shadow-md md:w-96 lg:w-80"
    >
      {/* if catagory is growth only then show most popular tagline */}
      {catagory === "Growth" ? (
        <div className="bg-gradient center gap-4 rounded-t-md p-2 text-lg text-white">
          <p>Most Popular</p>
          <Sparkles size={20} />
        </div>
      ) : null}

      {/* pricing card content*/}
      <div className="p-4">
        {/* catagory */}
        <p className="my-5 text-xl font-semibold">{catagory}</p>

        {/* price */}
        <p className="text-sm">
          <span className="text-3xl font-bold">${price}</span> / month
        </p>

        {/* Get started button */}
        <button
          className={`my-6 w-full rounded-md py-2 ${catagory === "Growth" ? "bg-gradient active:bg-gradient-active text-white" : "border-2 border-pink-500"}`}
        >
          Get Started
        </button>

        {/* All features included in pack */}
        <p className="font-semibold">All {type} features, plus:</p>

        {/* map througe each feature and return them */}
        {features.map((feature) => (
          <div className="center my-3 justify-start gap-4" key={feature}>
            <Check size={14} color="green" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
