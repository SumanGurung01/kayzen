import { Headset, Mail, PieChart, SquareTerminal } from "lucide-react";
import React from "react";

import Solution1 from "@/assets/solution-1.gif";
import Solution2 from "@/assets/solution-2.gif";
import Solution3 from "@/assets/solution-3.gif";
import Solution5 from "@/assets/solution-5.gif";
import Image from "next/image";
import Blob from "../ui/Blob";

function Solution() {
  return (
    <main
      className="relative mx-auto my-10 mt-32 max-w-4xl  grid-cols-4 gap-x-10 md:grid"
      id="features"
    >
      {/* Solution 1*/}
      <div className="relative col-span-4 my-10 rounded-lg border-2 border-pink-500 bg-white">
        <div className="p-4 md:w-[60%]">
          <Image
            src={Solution1}
            alt="solution image"
            className="right-10 top-10 mx-auto w-48 md:absolute"
          />

          <section className="center my-4 justify-start gap-3">
            <Headset />
            <h1 className="gradient-text text-2xl font-bold">
              PERSONALIZED SUPPORT BOT
            </h1>
          </section>
          <h1 className="mb-3 text-2xl font-bold">
            Personalized business bot using your own data
          </h1>
          <p>
            Ever wanted a support that resolves queries 24/7/365 days, collect
            leads with 10x productivity and 10x cost efficient. Provide customer
            support with instant response and automate answering the vast
            majority and support tickets.
          </p>
        </div>
      </div>

      <div className="relative col-span-3 my-10 rounded-lg border-2 border-pink-500 bg-white p-4">
        <Image
          src={Solution2}
          alt="solution image"
          className="right-[-240px] top-[-30px] mx-auto w-60 md:absolute"
        />
        <section className="center my-4 justify-start gap-3">
          <PieChart />
          <h1 className="gradient-text text-2xl font-bold">DASHBOARD</h1>
        </section>
        <h1 className="mb-3 text-2xl font-bold">
          Kayzen Dashboard powered with AI
        </h1>
        <p>
          Effortlessly track bot performance and gain valuable insights with our
          intuitive dashboard. AI assitance Dashboard that can query to get
          visual insights.
        </p>
      </div>

      <div className="relative col-span-3 col-start-2 my-10 rounded-lg border-2 border-pink-500 bg-white p-4">
        <Image
          src={Solution3}
          alt="solution image"
          className="left-[-240px] top-[-30px] mx-auto w-60 md:absolute"
        />
        <section className="center my-4 justify-start gap-3">
          <Mail />
          <h1 className="gradient-text text-2xl font-bold">EMAIL SUMMARIES</h1>
        </section>
        <h1 className="mb-3 text-2xl font-bold">
          Stay informed with our Daily Email Summaries
        </h1>
        <p>
          Stay updated on chatbot chats with daily summaries sent to your email.
          Add more training information if necessary, monitor how the chatbot is
          doing, and learn about user actions in your personal Kayzen Dashboard
        </p>
      </div>

      <div className="col-span-2 my-10 rounded-lg border-2 border-pink-500 bg-white p-4">
        <Image src={Solution3} alt="solution image" className="mx-auto w-60" />
        <section className="center my-4 justify-start gap-3">
          <Headset />
          <h1 className="gradient-text text-2xl font-bold">HUMAN ASSITANCE</h1>
        </section>
        <h1 className="mb-3 text-2xl font-bold">
          Get human assistance when needed
        </h1>
        <p>
          While our AI handles most queries, we understand some situations need
          a human touch. Users can smoothly switch to a live agent with just one
          click. This blend guarantees top-notch assistance every time.
        </p>
      </div>

      <div className="col-span-2 my-10 rounded-lg border-2 border-pink-500 bg-white p-4">
        <Image
          src={Solution5}
          alt="solution image"
          className="mx-auto my-10 w-44"
        />

        <section className="center my-4 justify-start gap-3">
          <SquareTerminal />
          <h1 className="gradient-text text-2xl font-bold">QUICK PROMPTS</h1>
        </section>
        <h1 className="mb-3 text-2xl font-bold">
          prompt users for engaging conversation
        </h1>
        <p>
          Break the digital ice with our conversation starters! Discover
          commonly asked questions or insightful queries that enhance your
          experience with our product or service.
        </p>
      </div>

      {/* floating gradient blobs */}
      <Blob className="absolute right-0 top-[200px] z-[-10] hidden h-[500px] w-[300px] rounded-full bg-pink-500 opacity-5 blur-3xl lg:block" />

      <Blob className="absolute left-[-150px] top-[500px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-5 blur-3xl lg:block" />
    </main>
  );
}

export default Solution;