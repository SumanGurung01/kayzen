import Image from "next/image";
import React from "react";
import Feature1 from "@/assets/feature-assets/feature-1.png";
import Feature2 from "@/assets/feature-assets/feature-2.gif";
import Feature3 from "@/assets/feature-assets/feature-3.gif";
import Kayzen from "@/assets/kayzen-assets/logo.png";
import Blob from "../ui/Blob";

function Feature() {
  return (
    <div className="relative">
      {/* div containing Kayzen Logo */}
      <div className="center mb-16 mt-40">
        <Image src={Kayzen} alt="Kayzen Logo" className="w-20" />
      </div>

      {/* Main containing feature card */}
      <main className="center relative mb-10 flex-col gap-20 overflow-hidden pb-40 lg:flex-row">
        {/* Feature 1 */}
        <div
          id="feature-phone-agent"
          className="mb-16 w-full rounded-2xl border-2 border-pink-500 bg-white p-5 md:max-w-xl lg:mb-0 lg:h-96 lg:max-w-72"
        >
          <h1 className="mb-2 text-2xl font-semibold">Phone Agent</h1>
          <div className="relative flex lg:flex-col">
            <p className="w-[60%] text-lg lg:w-full">
              Kayzen&apos;s AI acts as your sales agent, managing calls and
              initiating outreach to ensure no customer is missed.
            </p>
            <Image
              src={Feature1}
              alt="feature image"
              className="absolute right-0 w-36 rotate-[15deg] lg:bottom-[-260px] lg:left-[40px] lg:w-44"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div
          id="feature-chat-agent"
          className="mb-16 w-full rounded-2xl border-2 border-pink-500 bg-white p-5 md:max-w-xl lg:mb-0 lg:h-96 lg:max-w-72"
        >
          <h1 className="mb-2 text-2xl font-semibold">Chat Agent</h1>
          <div className="relative flex lg:flex-col">
            <p className="w-[60%] text-lg lg:w-full">
              Convert visitors to customers with an engaging custom chatbot
              trained on your content to answer their questions.
            </p>
            <Image
              src={Feature2}
              alt="feature image"
              className="absolute bottom-[-100px] right-[-50px] w-60 lg:bottom-[-250px] lg:left-[20px] lg:w-96"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div
          id="feature-email-agent"
          className="mb-16 w-full rounded-2xl border-2 border-pink-500 bg-white p-5 md:max-w-xl lg:mb-0 lg:h-96 lg:max-w-72"
        >
          <h1 className="mb-2 text-2xl font-semibold">Email Agent</h1>
          <div className="relative flex lg:flex-col">
            <p className="w-[60%] text-lg lg:w-full">
              Send personalized cold emails to gather leads and potential
              customers, and get weekly report summaries.
            </p>
            <Image
              src={Feature3}
              alt="feature image"
              className="absolute  bottom-[-30px] right-[-30px] w-52 lg:bottom-[-210px] lg:left-[0px] lg:w-56"
            />
          </div>
        </div>
      </main>

      {/* Floating Gradient Blob */}
      <Blob className="absolute left-[0px] top-[600px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />
      <Blob className="absolute right-[0px] top-[300px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-3xl lg:block" />
    </div>
  );
}

export default Feature;
