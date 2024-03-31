import Image from "next/image";
import React from "react";
import Feature1 from "@/assets/feature-1.png";
import Feature2 from "@/assets/feature-2.gif";
import Feature3 from "@/assets/feature-3.gif";
import Kayzen from "@/assets/logo.png";
import Blob from "../ui/Blob";

function Feature() {
  return (
    <div className="relative">
      {/* div containing Kayzen Logo */}
      <div className="center mb-16 mt-40">
        <Image src={Kayzen} alt="Kayzen Logo" className="w-20"></Image>
      </div>

      {/* Main containing feature card */}
      <main className="no-scrollbar relative mb-10 flex justify-around gap-10 overflow-scroll pb-40">
        {/* Feature 1 */}
        <div
          id="feature-phone-agent"
          className="relative h-[400px] w-72 flex-shrink-0 rounded-lg border-2 border-pink-500 p-5 text-center"
        >
          <h1 className="my-4 text-2xl font-semibold">Phone Agent</h1>
          <p className="text-lg">
            Kayzen's AI acts as your sales agent, managing calls and initiating
            outreach to ensure no customer is missed.
          </p>
          <Image
            src={Feature1}
            alt="feature image"
            className="absolute left-[50px] top-[250px] w-44 rotate-[15deg]"
          />
        </div>

        {/* Feature 2 */}
        <div
          id="feature-chat-agent"
          className="relative h-[400px] w-72 flex-shrink-0 rounded-lg  border-2 border-pink-500 p-5 text-center"
        >
          <h1 className="my-4 text-2xl font-semibold">Chat Agent</h1>
          <p className="text-lg">
            Convert visitors to customers with an engaging custom chatbot
            trained on your content to answer their questions.
          </p>
          <Image
            src={Feature2}
            alt="feature image"
            className="absolute left-[10px] top-[225px] w-96"
          />
        </div>

        {/* Feature 3 */}
        <div
          id="feature-email-agent"
          className="relative h-[400px] w-72 flex-shrink-0 rounded-lg  border-2 border-pink-500 p-5 text-center"
        >
          <h1 className="my-4 text-2xl font-semibold">Email Agent</h1>
          <p className="text-lg">
            Send personalized cold emails to gather leads and potential
            customers, and get weekly report summaries.
          </p>
          <Image
            src={Feature3}
            alt="feature image"
            className="absolute left-[10px] top-[180px] w-60"
          />
        </div>
      </main>

      {/* Floating Gradient Blob */}
      <Blob className="absolute left-[0px] top-[600px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />
      <Blob className="absolute right-[0px] top-[600px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-3xl lg:block" />
    </div>
  );
}

export default Feature;
