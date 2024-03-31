import React from "react";

const personalizationSteps = [
  {
    step: 1,
    heading: "Sync Training Data",
    content:
      "Upload txt, wordx file, web URLs, Youtube Video URL, and drop in raw text content for kayzen to understand what you need.",
  },

  {
    step: 2,
    heading: "Customize the chatbot",
    content:
      "Customize the VectorDB, pricing, output tokens, tone, persona. Tickets feed input or set it AUTO BEST options. Also Setup prompts, configure apperance.",
  },
  {
    step: 3,
    heading: "Install on your Site",
    content:
      "Embed the Chatbot on as many sites you want. Track, analyze and collect informations for Lead Gen or Solving Queries.",
  },
];

function Personalize() {
  return (
    <main className="center flex-col">
      <h1 className="mb-20 mt-0 w-full max-w-xl text-center text-3xl font-bold md:text-4xl lg:mt-10">
        You're <span className="gradient-text">three easy steps </span>away from
        your own personalized AI support chatbot
      </h1>

      {/* map through each personalization steps and display personalization card*/}
      <div className="lg:flex">
        {personalizationSteps.map((steps) => {
          const { step, heading, content } = steps;
          return (
            <PersonalizeCard
              step={step}
              heading={heading}
              content={content}
              key={step}
            />
          );
        })}
      </div>
    </main>
  );
}

/* Personalization card props type */
interface PersonalizeCardType {
  step: number;
  heading: string;
  content: string;
}

/* Personalization card containing step number, heading and content */
function PersonalizeCard({ step, heading, content }: PersonalizeCardType) {
  return (
    <div className="relative my-20 w-full max-w-md rounded-lg bg-pink-100 p-4 lg:mx-10">
      <div className="center bg-gradient absolute top-[-30px] h-14 w-14 rounded-md text-2xl font-bold text-white shadow-md">
        {step}
      </div>
      <h1 className="my-4 text-xl font-bold">{heading}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Personalize;
